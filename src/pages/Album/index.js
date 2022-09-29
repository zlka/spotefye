import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './style.css'

function Album () {
  return (
    <>
    <h2>Album List</h2>

    <div className="albums">
    <img src="https://upload.wikimedia.org/wikipedia/en/6/6d/Kaytranada_-_Bubba.png" alt="bubba" />
    <Link to ="Bubba">Bubba</Link>

    <img src="https://upload.wikimedia.org/wikipedia/en/8/89/Kaytranada%2C_%2799.9%25%27%2C_Artwork_-_Mar._18%2C_2016.png" alt="99.9%" />
    <Link to ="99.9">99.9%</Link>

    <Outlet />
    </div>
    </>
  );
}

export default Album ;
