import React, { useEffect, useState } from 'react'
import WeatheMainInfo from './WeatheMainInfo';
import WeatherForm from './WeatherForm';

const WeatherApp = () => {
    const [weather, setWeather] = useState(null);
    
    async function loadInfo(city = 'london') {
        try {
            const request = await fetch(
                `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
                )
                const json = await request.json();

                setWeather(json);
                console.log(json)
            } catch (error) {
                console.log(error)
            }
        }
        
    useEffect(() => {
        loadInfo();
    }, [])

    function handleOnChangeCity(city) {
        setWeather(null);
        loadInfo(city);
      }

return (
    <div className='container pt-5 vh-100'>
        <WeatherForm onChangeCity={handleOnChangeCity}/>
        {weather ? <WeatheMainInfo weather={weather}/> : "Buscando..."}
    </div>
  )
}

export default WeatherApp