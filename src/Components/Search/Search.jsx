import React from 'react'
import { useState } from 'react'
import './Search.css'

const Search = ({setLocation,getWeatherData}) => {
    
  return (
    <div className='SearchContainer'>
      <input onChange={(e)=>{setLocation(e.target.value)}} type="text" placeholder='Enter the location'/>
      <button className='btn' onClick={getWeatherData}>Search</button>
    </div>
  )
}

export default Search
