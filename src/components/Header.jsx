import React, { useContext, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context } from '../context';


const Header = () => {

    const query = useRef("");

    const { search, setSearch, fetchGifs, setAllGifs } = useContext(Context);

    return (
        <main style={{ display: "flex" }}>
            <Link to="/">
                <h1>
                    UffyeGiff
                </h1>
            </Link>

            <form >
                <input ref={query}  type="text" />
                <Link to="/search">
                    <button onClick={() => { fetchGifs(); setSearch(query.current.value) }} >Search</button>
                </Link>
            </form>
        </main>
    )
}

export default Header