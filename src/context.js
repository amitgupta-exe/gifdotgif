import { createContext, useState } from "react";
import axios from "axios";

export const Context = createContext();

export const GifProvider = (props) => {

    const [initialGifs, setInitialGifs] = useState([]);
    const [allGifs, setAllGifs] = useState([]);
    const [search, setSearch] = useState("");


    const API1 = "https://api.giphy.com/v1/gifs/search?api_key=UK5oNn3YFZRTh2RxgY9gXCp6e7tYo8kI&limit=50&offset=0&rating=g&lang=en&q=";


    const fetchInitialGifs = async () => {

        const response = await axios.get("http://localhost:3001/trends");

        const trendingSerches1 = response.data.default.trendingSearchesDays[0].trendingSearches;

        const trendingSearches = [...new Set([...trendingSerches1])]

        trendingSearches.map(async (search) => {
            const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=UK5oNn3YFZRTh2RxgY9gXCp6e7tYo8kI&limit=2&offset=0&rating=g&lang=en&q=${search.title.query}`)
            const gif = response.data.data[0].images.fixed_height.url;
            // console.log(gif);
            setInitialGifs((p) => [...p, gif]);
        })

    }


    const giphyAPI = async () => {

        try {
            setAllGifs([]);
            const response = await axios.get(API1 + search);
            const items = response.data.data;
            items.map((item) => {
                const gif = item.images.fixed_height.url;
                setAllGifs((p) => { return [...p, gif] });
            })

        } catch (error) {
            console.error(error);
        }
    }

    const value = {
        initialGifs,
        setInitialGifs,
        fetchInitialGifs,
        search,
        setSearch,
        giphyAPI,
        allGifs, setAllGifs,
    }


    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )

}