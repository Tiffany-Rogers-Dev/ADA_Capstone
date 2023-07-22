My Ship is Bananas

This is a React app that allows users to view weather forecasts and port activities for different selected cruiseline and ship itineraries, which are currently stored in a database
The app retrieves location, weather, and activity data from external APIs and displays the data in a user-friendly format

Features

Select a cruise line and ship from drop-down menus to view the itinerary for that selected ship
View a list of itinerary items, including dates, locations, arrival and departure times, and weather forecasts
Weather forecasts include temperature and description for each location
Scroll through the list of port activities to locate things to do at port
Use the Get Weather at Sea button to find out the weather while sailing, The button returns weather from your current coordinates

The app uses two external APIs to retrieve location and weather data, and a third API for the port activities

Installation

Clone the repository to your local machine
Install dependencies by running:
$yarn build 
$yarn add firebase
$yarn add html-react-parser
$yarn add dotenv
$yarn add axios
in the project terminal
Create a .env file in the project directory
Then create the following environment variables:

REACT_APP_LOCATION_API_KEY=<your LocationIQ API key>
REACT_APP_WEATHER_API_KEY=<your OpenWeatherMap API key>
REACT_APP_ACTIVITY_API_KEY=<your Amadeus API key>

You can obtain API keys for LocationIQ, OpenWeatherMap, Amadeus by signing up for free developer accounts on their websites

Run the app by running $yarn start in the project terminal

Usage

Open the app in a web browser by navigating to http://localhost:3000
Select a cruise line and ship from the drop-down menus at the top of the page
View the itinerary items and weather forecasts that are displayed below the drop-down menus
Below the itineraries are the port activities and a button to find out the weather when the cruise ship is at sea

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
# ADA_Capstone
