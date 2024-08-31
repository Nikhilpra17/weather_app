"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { setWeatherData, setError } from "../store/weatherSlice";
import WeatherCard from "./WeatherCard";

const Weather: React.FC = () => {
  const location = useSelector((state: RootState) => state.weather.location);
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const error = useSelector((state: RootState) => state.weather.error);
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
          if (data && data.locality_weather_data) {
            dispatch(setWeatherData(data.locality_weather_data));
          } else {
            dispatch(setError("Location not found"));
          }
        })
        .catch((error) => {
          console.error("Failed to fetch weather data:", error);
          dispatch(setError("Failed to fetch weather data"));
        });
    }
  }, [location, dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl">Weather Information for {location}</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : weatherData ? (
        <WeatherCard data={weatherData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
