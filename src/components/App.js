//App.js
import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: '' });

  useEffect(() => {
    // Simulate fetching weather data
    const weatherInput = { temperature: 25, conditions: 'Sunny' };
    setWeather(weatherInput);
  }, []);

  return (
    <div>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;

/*
import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
 
  const [weatherData, setWeatherData] = useState({
    temperature: 0,
    conditions: 'Unknown',
  });

  
  useEffect(() => {
   
    setWeatherData({ temperature: 25, conditions: 'Sunny' });
  }, []);

  return (
    <div>
     
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default App;
*/