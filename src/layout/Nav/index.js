import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

function Nav() {

  const activeClass = (({ isActive }) => isActive ? 'current' : undefined)

  return (
    <>
      <div className='title'>
        <h1 >Kaytranada</h1>

        <ul>
        <NavLink className={activeClass} to="/" end >Home</NavLink>
        <NavLink className={activeClass} to="album" >Album</NavLink>
      </ul>
      </div>
      

    </>
  );
}

export default Nav;
