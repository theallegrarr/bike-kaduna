import React from 'react'

import face from '../assets/face2.webp'
import logo from '../assets/talogo.png'

export default function RiderProfile({ name, id, location, setList }){

    return(
        <div className="profile">
            <h1 onClick={() => setList(true)}>{'<< Back'}</h1>
            <div className="image-logo">
                <img className="face" alt="face" src={face} />
                <img className="logo" alt="logo" src={logo} />
            </div>
            <p>Name: {name}</p>
            <p>Location: {location}</p>
            <p>Rider ID: {id}</p>
        </div>
    )
}