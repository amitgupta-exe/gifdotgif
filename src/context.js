import { createContext, useState } from "react";
import App from "./App";
import axios from "axios";

export const Context = createContext();

export const GifProvider = (props) => {

    const [initialGifs, setInitialGifs] = useState([]);
    const [currentGifs, setCurrentGifs] = useState([]);
    const [allGifs, setAllGifs] = useState([]);

    const [search, setSearch] = useState("");


    const API1 = "https://api.giphy.com/v1/gifs/search?api_key=UK5oNn3YFZRTh2RxgY9gXCp6e7tYo8kI&limit=10&offset=0&rating=g&lang=en&q=";


    const fetchInitialGifs = async () => {
        const response = await axios.get("http://localhost:3001/trends");

        const trendingSearches1 = response.data.default.trendingSearchesDays[0].trendingSearches;
        // const trendingSearches2 = response.data.default.trendingSearchesDays[1].trendingSearches;
        const trendingSerches = [...trendingSearches1];

        trendingSerches.map(async (search) => {
            const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=UK5oNn3YFZRTh2RxgY9gXCp6e7tYo8kI&limit=1&offset=0&rating=g&lang=en&q=${search.title.query}`)
            const gif = response.data.data[0].images.fixed_height.url;
            setInitialGifs((p) => [...p, gif]);
        })
    }


    const fetchGifs = async () => {

        setAllGifs([]);
        console.log(allGifs);

        console.log(search);
        const response = await axios.get(API1 + search);
        const items = response.data.data;
        items.map((item) => {
            const gif = item.images.fixed_height.url;
            setAllGifs((p) => { return [...p, gif] });
        })

        console.log(allGifs);

    }

    const value = {
        initialGifs,
        setInitialGifs,
        fetchInitialGifs,
        search,
        setSearch,
        fetchGifs,
        allGifs, setAllGifs,
    }


    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )

}