import React from 'react'
import './App.css'
import Title from './Components/Title/Title'
import Search from './Components/Search/Search'
import Date from './Components/Date/DateDisplay'
import Temperature from './Components/Temperature/Temperature'
import Description from './Components/Description/Description'
import { useState,useEffect } from 'react'

const App = () => {
  const [location,setLocation]=useState("London");
  const [weatherData, setWeatherData] = useState(null);

 const getWeatherData=async ()=>{
      try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,{
          headers:{
            Accept:"application/json"
          }
        });
        const data=await response.json();
        console.log(data);
        if(response.ok){
          setWeatherData(data);
        }else {
        setWeatherData(null);
        console.log("City not found");
      }
      }catch(error){
        console.log(error)
      }
     
    
    }
     useEffect(() => {
     getWeatherData(); 
      }, []); 

  return (
    <div className={`app ${weatherData?.weather?.[0]?.main?.toLowerCase() || ''}`}>
      <Title/>
      <Search setLocation={setLocation} getWeatherData={getWeatherData}/>
      <Date/>
      {weatherData && (
        <>
          <Description data={weatherData} />
          <Temperature data={weatherData} />
        </>
      )}
    </div>
  )
}

export default App
