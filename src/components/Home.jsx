import React, { useContext, useEffect } from "react"
import { Context } from '../context';

const Home = () => {

    const { initialGifs,
        fetchInitialGifs } = useContext(Context);

    useEffect(() => {
        fetchInitialGifs();
    }, [])

    return (
        <main>
            {initialGifs.map((url, index) => {
                return (
                    <img key={index} src={url} alt="" />
                )
            })}

        </main>
    )
}

export default Home