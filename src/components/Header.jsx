import React, { useContext, useEffect, useRef } from 'react';

import { Context } from '../context';


const Header = () => {

    const query = useRef("");

    const { search, setSearch, giphyAPI } = useContext(Context);

    const handleSubmit = () => {
        setSearch(query.current.value);
    }

    useEffect(() => {
        giphyAPI();
    }, [search]);


    return (
        <main className='header-container'>

            <header className='header'>
                <a href="/" className='logo'>gif.gif</a>
                <form className='search' onSubmit={(e) => { e.preventDefault(); }}>
                    <input className='search-input' ref={query} type="text" />
                    <button className='search-btn' onClick={() => { handleSubmit() }}>Search</button>
                </form>
            </header>

            <div className="header-adjuster"></div>

        </main>
    )
}

export default Header