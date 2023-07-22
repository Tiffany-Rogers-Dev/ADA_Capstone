import React, { useState, useEffect } from "react";
import "./App.css";
import Activities from "./Activities";
import Forecast from "./Forecast";
import Weather from "./Weather";
import { initializeApp } from "@firebase/app";
import { getDatabase, ref, onValue } from "@firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDocCZk4l2bFtL7IyS1n7asKI9wMFoCA-g",
  authDomain: "my-ship-is-bananas.firebaseapp.com",
  databaseURL: "https://my-ship-is-bananas-default-rtdb.firebaseio.com",
  projectId: "my-ship-is-bananas",
  storageBucket: "my-ship-is-bananas.appspot.com",
  messagingSenderId: "173718188281",
  appId: "1:173718188281:web:cf8f53745ec47d4429f228",
};

export default function App() {
  const [cruiseLine, setCruiseLine] = useState("Select Cruise Line");
  const [ship, setShip] = useState("Select Ship");
  const [itinerary, setItinerary] = useState([]);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    const cruiseRef = ref(db, "cruiseLine");

    onValue(cruiseRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const cruiseData = data[cruiseLine][ship].itinerary;
        setItinerary(cruiseData);
      }
    });
  }, [cruiseLine, ship]);

  const handleCruiseLineChange = (event) => {
    setCruiseLine(event.target.value);
  };

  const handleShipChange = (event) => {
    setShip(event.target.value);
  };

  return (
    <div>
      <div id='styledimg'></div>
      <h5>My Ship is Bananas!</h5>
      <div>
        <label>For Your Personalized Itinerary...</label>
        <select value={cruiseLine} onChange={handleCruiseLineChange}>
          <option value='Select Cruise Line'>Select Cruise Line</option>
          <option value='Carnival'>Carnival</option>
          <option value='Disney'>Disney</option>
          <option value='Virgin'>Virgin</option>
        </select>
      </div>
      <div>
        <label className='ship'></label>
        <select value={ship} onChange={handleShipChange}>
          <option value='Select Ship'>Select Ship</option>
          {cruiseLine === "Carnival" && (
            <React.Fragment>
              <option value='Breeze'>Breeze</option>
            </React.Fragment>
          )}
          {cruiseLine === "Disney" && (
            <React.Fragment>
              <option value='Dream'>Dream</option>
            </React.Fragment>
          )}
          {cruiseLine === "Virgin" && (
            <React.Fragment>
              <option value='SeaVoyager'>SeaVoyager</option>
            </React.Fragment>
          )}
        </select>
      </div>
      {itinerary.length > 0 && (
        <div className='itinerary'>
          <h1>Itinerary:</h1>
          <div className='itinerary-list'>
            <ul>
              {itinerary.map((item, index) => (
                <li key={index}>
                  <div className='box'>
                    <div>Date: {item.date}</div>
                    <div>Location: {item.location}</div>
                    <div>
                      <Forecast date={item.date} location={item.location} />
                    </div>
                    <div>Arrival Time: {item.arrivalTime}</div>
                    <div>Departure Time: {item.departureTime}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <Weather />
      {/* <Activities /> */}
    </div>
  );
}
