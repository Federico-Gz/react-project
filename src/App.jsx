import React, { useState } from 'react';
import './assets/css/App.css'
import Game from './components/Game.jsx'
import Welcome from './components/Welcome.jsx'
import Navbar from './components/Navbar.jsx'




function App() {

  return (
    <>
      <Navbar />
      <Welcome />
      <Game />
    </>
  )
}

export default App;