import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

function Nav() {

  const activeClass = (({ isActive }) => isActive ? 'current' : undefined)

  return (
    <>
      <ul>
        <NavLink className={activeClass} to="/" end >Home</NavLink>
        <NavLink className={activeClass} to="album" >Album</NavLink>
      </ul>

    </>
  );
}

export default Nav;
