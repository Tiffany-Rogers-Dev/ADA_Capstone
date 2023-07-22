import React, { useState, useEffect } from "react";

const REACT_APP_LOCATION_API_KEY = `${process.env.REACT_APP_LOCATION_API_KEY}`;
const REACT_APP_WEATHER_API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;
const LOCATION_REQUEST_INTERVAL = 20000;

export default function Forecast({ date, location }) {
  const [forecast, setForecast] = useState(null);
  const [lastLocationRequestTime, setLastLocationRequestTime] = useState(0);

  useEffect(() => {
    const fetchForecast = async () => {
      // Check if enough time has passed since the last location request
      const currentTime = new Date().getTime();
      if (currentTime - lastLocationRequestTime < LOCATION_REQUEST_INTERVAL) {
        return;
      }

      const locationUrl = `https://us1.locationiq.com/v1/search.php?key=${REACT_APP_LOCATION_API_KEY}&city=${location}&format=json`;
      const locationResponse = await fetch(locationUrl);
      const locationData = await locationResponse.json();
      const lat = locationData[0].lat;
      const lon = locationData[0].lon;
      const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${REACT_APP_WEATHER_API_KEY}&units=imperial`;
      const weatherResponse = await fetch(weatherUrl);
      const weatherData = await weatherResponse.json();
      const forecast = weatherData.list.filter((item) => {
        return item.dt_txt.split(" ")[0] === date;
      });
      setForecast(forecast[0]);

      // Update the last location request time
      setLastLocationRequestTime(currentTime);
    };

    fetchForecast();
  }, [date, location, lastLocationRequestTime]);

  if (!forecast) {
    return <div>Loading forecast...</div>;
  }

  return (
    <div>
      Temperature: {Math.ceil(forecast.main.temp)}°F <br />
      Description: {forecast.weather[0].description}
    </div>
  );
}
