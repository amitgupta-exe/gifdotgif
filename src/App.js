import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home';
import NoPage from './components/NoPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './components/Search';


import { Context } from './context';



const App = () => {

  const {search} = useContext(Context);



  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/search/:query' element={<Search/>}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;