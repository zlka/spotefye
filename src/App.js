import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css';
import { Nav } from './layout'
import { Home,Album,Songs } from './pages'


function App() {
  return (
    <div>
      
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="album" element={<Album />}></Route>
        <Route path="album/bubba" element={<Songs />}></Route>
      </Routes>

    </div>
  );
}

export default App;
