import React, { useState } from 'react'

const WeatherForm = ({onChangeCity}) => {
    const [city, setCity] = useState("");

    function handleChange(e) {
        setCity(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!city || city !== "") {
          onChangeCity(city);
        }
      }
      
  return (
    <div>
      <label className="form-label">Escribe una localidad</label>
      <form onSubmit={handleSubmit}>
          <input 
            className='form-control w-50 m-auto mt-3 mb-5'
            type="text"
            value={city}
            onChange={handleChange}
          />
      </form>
    </div>
  )
}

export default WeatherForm