import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Currentweather from './components/Currentweather/Currentweather'
import Forecastweather from './components/Forecastweather/Forecastweather'

const App = () => {

  let weather ={

    apiKey : "aedad2a53644a99d72136eb2fc6e9e9b",

    getCityCoordinates : function(cityname){
      fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&units=metric&appid=${this.apiKey}`)
      .then(response => response.json())
      .then(data => {
        if(!data.length){
          return alert("Location not found. Please enter valid location")
        }
        const { lat,lon } = data[0]
        this.fetchWeather(lat,lon)
      })
    },
    fetchWeather : function(latitude,longitude){
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}`)
      .then(response => response.json())
      .then(data => this.displayWeather(data))
    }
  }
  
  return (
    <main>
      <Navbar/>
      <Currentweather/>
      <Forecastweather/>
    </main>
  )
}

export default App
