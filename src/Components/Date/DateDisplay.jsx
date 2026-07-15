import React from 'react'
import './Date.css'
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const DateDisplay = () => {
  const dateObj=new Date();
  const month=months[dateObj.getUTCMonth()];
  const date=dateObj.getUTCDate();
  const year=dateObj.getUTCFullYear();


  return (
    <div className='date'>
      <h3 className='today'>{date}/{month}/{year}</h3>
    </div>
  )
}

export default DateDisplay
