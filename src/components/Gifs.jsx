import React, { useContext, useEffect, useState } from 'react';

import { Context } from '../context';

import ClipLoader from "react-spinners/ClipLoader";
import GifsNavigator from './GifsNavigator';


const Gifs = () => {

    const { initialGifs, fetchInitialGifs, search, allGifs } = useContext(Context);

    const [index, setIndex] = useState(1);
    const [currentGifs, setCurrentGifs] = useState([]);
    const [loadingMessage, setLoadingMessage] = useState("Loading . . . ")

    const loadCurrent = () => {
        setCurrentGifs(allGifs.slice((index * 10) - 10, (index * 10)));
    }

    const loadNext = () => {
        setCurrentGifs([]);
        setIndex(index + 1);
    }

    const loadPrevious = () => {
        setCurrentGifs([]);
        setIndex(index - 1)
    }

    const loadFirst = () => {
        if (index > 1) {
            setCurrentGifs([]);
        }
        setIndex(1)
    }

    const loadLast = () => {
        if (index < 5) {
            setCurrentGifs([]);
        }
        setIndex(Math.floor(allGifs.length / 10))
    }

    useEffect(() => {
        fetchInitialGifs();
    }, [])

    useEffect(() => {
        setCurrentGifs([]);
    }, [index])

    useEffect(() => {
        loadCurrent();
        setTimeout(() => {
            if (currentGifs.length === 0) {
                setLoadingMessage("No results for " + `"${search}"`)
            }
        }, 1000)
    }, [allGifs, index]);

    useEffect(() => {
        setIndex(1);
    }, [allGifs])



    const navigatorFunctions = { loadFirst, loadLast, loadNext, loadPrevious };
    const states = { index, allGifs, currentGifs }

    return (
        <main className='response'>

            <section className="navigator-container navigator-up">{
                (allGifs.length !== 0) ?
                    <p className='instruction-text'>Showing results for <b>"{search}"</b></p> : <></>
            }
                {
                    search.length !== 0 ?
                        <GifsNavigator states={states} navigatorFunctions={navigatorFunctions} />
                        : <></>
                }
            </section>

            {
                (currentGifs.length === 0 && search.length !== 0) ?
                    <h1>{loadingMessage}</h1>
                    :
                    <section className='gif-grid'>
                        {
                            currentGifs.map((url, index) => {
                                return (
                                    <div className="gif-container">
                                        <ClipLoader className='loader' size={40} aria-label="Loading Spinner" data-testid="loader" />
                                        <img className='gif-image' key={index} src={url} alt="" />
                                    </div>
                                )
                            })
                        }
                    </section>
            }

            <section className="navigator-container navigator-down">
                {
                    (search.length !== 0) ?
                        <GifsNavigator states={states} navigatorFunctions={navigatorFunctions} />
                        :
                        <section className='gif-grid'>
                            {initialGifs.map((url, index) => {
                                return (
                                    <div className="gif-container">
                                        <ClipLoader className='loader' size={40} aria-label="Loading Spinner" data-testid="loader" />
                                        <img className='gif-image' key={index} src={url} alt="" />
                                    </div>
                                )
                            })}
                        </section>
                }
            </section>

        </main>
    )


}

export default Gifs