import React from 'react'

const WeatheMainInfo = ({weather}) => {

  return (
    <div className='d-flex justify-content-center gap-4'>
      <div className="card w-25 d-flex align-items-center">
        <img src={weather?.current.condition.icon} alt="condition" className='w-50 h-50'/>
        <div className="card-body">
          <h1>{weather?.location.name}</h1>
          <h2>{weather?.location.country}</h2>
          <h2 className='text-secondary'>{weather?.current.condition.text}</h2>
        </div>
        <div className='d-flex justify-content-center gap-5'>
          <h2>{weather?.current.temp_c}°C</h2>
          <h2>{weather?.current.temp_f}°F</h2>
        </div>
      </div>
      <div>
        <iframe
          title='mapa'
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather.location.lon}5!3d${weather.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
          height="100%"
          style={{ border: 0, width: 600 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  )
}

export default WeatheMainInfo