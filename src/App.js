import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css';
import { Nav } from './layout'
import { Home,Album } from './pages'


function App() {
  return (
    <div>
      <h1>Kaytranada</h1>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="album" element={<Album />}></Route>
      </Routes>

    </div>
  );
}

export default App;
