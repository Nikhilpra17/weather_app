"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { setWeatherData } from "../store/weatherSlice";

const Weather: React.FC = () => {
  const location = useSelector((state: RootState) => state.weather.location);
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (location) {
      fetch(`https://api.weatherunion.com/data?location=${location}`)
        .then((response) => response.json())
        .then((data) => dispatch(setWeatherData(data)));
    }
  }, [location, dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl">Weather Information for {location}</h1>
      {weatherData ? (
        <div>
          <p>Temperature: {weatherData.temperature}</p>
          <p>Condition: {weatherData.condition}</p>
          {/* Add more weather details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
