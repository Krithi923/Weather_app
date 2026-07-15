import React from 'react'
import './Description.css'

const Description = ({data}) => {
     if (!data || !data.weather || !data.weather[0]) {
    return <div style={{ color: 'white' }}>Loading description details...</div>;
  }
  const city=data.name;
  const weather=data.weather[0].description;
  const iconCode=data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const kelvin=data.main.temp;
  const celcius=Math.round(kelvin-273.15);

  return (
   
    <div className='description'>
      <h3 className="city">{city}</h3>
       <div className="img"><img src={iconUrl} alt="" className="weatherImg" /></div>
      <p className="weather">{weather}</p>
      <h3 className="temp">{celcius}°C</h3>
     
    </div>
  )
}

export default Description
