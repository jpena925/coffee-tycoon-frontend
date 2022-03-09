import React from 'react'

import logo from '../logo.svg'

function Header() {
  let min = Math.ceil(40)
  let max = Math.floor(90)
  let temperature = Math.floor(Math.random() * (max-min) + min);
  const conditions = ["Sunny ☀️", "Rainy 🌧"]

  return (
    <div id="header">
      <img src={logo} alt="Logo" style={{height: "200px", width: "200px"}}/>
      <button>New Game</button>
      <p>Current Weather :</p>
      <div id="weather">
        <p className='weather_items'>Caffeinetown, USA</p>
        <p className='weather_items'>{temperature}°F</p>
        <p className='weather_items'>{conditions[Math.floor(Math.random() * conditions.length)]}</p>
      </div>
    </div>
  )
}

export default Header