import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

const REACT_APP_WEATHER_API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;

export default function Weather() {
  const savePosition = (position) => {
    getWeather(position.coords.latitude, position.coords.longitude);
  };
  const getWeather = (latitude, longitude) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${REACT_APP_WEATHER_API_KEY}&units=imperial`
      )
      .then((res) => {
        console.log(res);
        console.log(res.data.main.temp);
        const new_temp = Math.floor(res.data.main.temp);
        setLocationWeather(new_temp);
      });
  };

  const [locationWeather, setLocationWeather] = useState(0);
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(savePosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className='sea'>
      <button className='weather_button' onClick={getLocation}>
        Get Weather at Sea
      </button>
      <div
        style={{
          gap: "5px",
        }}
      >
        <div className='weather'> Sea Weather {locationWeather}°F</div>
      </div>
    </div>
  );
}
