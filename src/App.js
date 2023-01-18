import React from 'react';
import './styles/styles.css'

import Header from './components/Header';
import Gifs from './components/Gifs';


const App = () => {
  return (
    <main className='app'>
      <Header />
      <Gifs />
    </main>
  )
}

export default App;