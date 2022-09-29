import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Album() {
  return (
    <>
      <h2>Albums</h2>

      <div className="container">

      <div className="album">
          <img src="https://media.pitchfork.com/photos/5df3c008b91d230008bf3846/1:1/w_800,h_800,c_limit/bubba.jpeg" alt="bubba" />
          <Link to="bubba">Bubba </Link>
        </div>

        <div className="album">
          <img src="https://upload.wikimedia.org/wikipedia/en/8/89/Kaytranada%2C_%2799.9%25%27%2C_Artwork_-_Mar._18%2C_2016.png" alt="99.9%" />
          <Link to="99.9">99.9%</Link>
        </div>

      
        <div className="album">
          <img src="https://i.scdn.co/image/ab67616d0000b2731f179a574bab0e0a77f0db41" alt="kaytra to do" />
          <Link to="todo"> Kaytra to do </Link>
        </div>


      </div>


    </>
  );
}

export default Album;
