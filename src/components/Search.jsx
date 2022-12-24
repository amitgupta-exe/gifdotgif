import React, { useContext, useEffect } from 'react'
import { Context } from '../context';

const Search = () => {

    const { search, setSearch, allGifs, setAllGifs, fetchGifs } = useContext(Context);


    useEffect(() => {
        console.log(search);
        fetchGifs();
        console.log(allGifs);

    }, [])

 


    return (
        <main>
            <section>

                {
                    allGifs.map((url, index) => {
                        return (
                            <img key={index} src={url} alt="" />
                        )
                    })
                }
            </section>
            {
                search.length != 0 ? <section>
                    <form action="">
                        <button className="previous">&lt;</button>
                        <input type="text" />
                        <button>Go</button>
                        <p>of</p>
                        <p>{allGifs.length / 10}</p>
                        <button className="next">&gt;</button>
                    </form>
                </section> : <>
                    <h1>type something</h1></>
            }



        </main>
    )
}

export default Search