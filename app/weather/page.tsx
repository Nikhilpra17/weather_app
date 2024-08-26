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
      const url = `https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data?locality_id=ZWL001156`;

      fetch(url, {
        headers: {
          "X-Zomato-Api-Key": "9fb3fb26b69d4292f8ae213088f20d98",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          dispatch(setWeatherData(data.locality_weather_data));
        })
        .catch((error) => {
          console.error("Failed to fetch weather data:", error);
        });
    }
  }, [location, dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl">Weather Information for {location}</h1>
      {weatherData ? (
        <div>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Rain Accumulation: {weatherData.rain_accumulation} mm</p>
          <p>Rain Intensity: {weatherData.rain_intensity} mm/h</p>
          <p>Wind Speed: {weatherData.wind_speed} km/h</p>
          <p>Wind Direction: {weatherData.wind_direction}°</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
