import React from 'react'
import { useState } from 'react'
import './Search.css'

const Search = ({setLocation,getWeatherData}) => {
    
    

    //31036c583655043d3c8d71a01d0e48d7
  return (
    <div className='SearchContainer'>
      <input onChange={(e)=>{setLocation(e.target.value)}} type="text" placeholder='Enter the location'/>
      <button className='btn' onClick={getWeatherData}>Search</button>
    </div>
  )
}

export default Search
