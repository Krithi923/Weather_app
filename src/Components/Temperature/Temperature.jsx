import React from 'react'
import './Temperature.css'

const Temperature = ({data}) => {
    const tempMaxKelvin=data.main.temp_max;
    const tempMinKelvin=data.main.temp_min;
    const tempMax=Math.round(tempMaxKelvin-273.15);
     const tempMin=Math.round(tempMinKelvin-273.15);

  return (
    <div className='temperature'>
        <div className="col left">
            <div className="high">
                <h2>{tempMax}°C</h2>
                <h3>High</h3>
            </div>
        </div>
        <div className="col right">
            <div className='low'>
                <h2>{tempMin}°C</h2>
                <h3>Low</h3>
            </div>
        </div>

      
    </div>
  )
}

export default Temperature
