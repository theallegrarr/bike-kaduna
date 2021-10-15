import React from 'react'

import face from '../assets/face2.webp'
import logo from '../assets/talogo.png'

export default function RiderProfile({ rider, setList }){
    const { Name, STATE, Zone } = rider
    return(
        <div className="profile">
            <h1 onClick={() => setList(true)}>{'<< Back'}</h1>
            <div className="image-logo">
                <img className="face" alt="face" src={face} />
                <img className="logo" alt="logo" src={logo} />
            </div>
            <p>Name: {Name}</p>
            <p>Location: {STATE}</p>
            <p>Zone: {Zone}</p>
            <p>Brand: {rider["Brand type"]}</p>
            <p>Plate No: {rider["Plate No"]}</p>
            <p>Bike: {rider["Bike Type"]}</p>
        </div>
    )
}