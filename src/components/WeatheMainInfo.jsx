import React from 'react'

const WeatheMainInfo = ({weather}) => {

  return (
    <div>
        <h1>{weather?.location?.name}</h1>
        <h2>{weather?.location?.country}</h2>
        <h2>{weather?.current?.temp_c}°C</h2>
        <h2>{weather?.current?.temp_f}°F</h2>
        <img src={weather?.current?.condition.icon} alt="condition"/>
        <h2>{weather?.current?.condition.text}</h2>
    </div>
  )
}

export default WeatheMainInfo