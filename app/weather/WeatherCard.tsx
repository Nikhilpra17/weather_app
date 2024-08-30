"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  WiDaySunny,
  WiSprinkle,
  WiNightAltSleetStorm,
  WiStrongWind,
  WiTornado,
  WiLightning,
} from "react-icons/wi";

const WeatherCard: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-5 max-w-4xl w-full"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center">
            <WiDaySunny className="text-6xl text-yellow-500" />
            <p className="text-xl font-medium text-gray-700">{data.location}</p>
            <p className="text-xl font-medium text-gray-700">
              Temperature: {data.temperature}°C
            </p>
            <WiSprinkle className="text-6xl text-blue-500" />
            <p className="text-xl font-medium text-gray-700">
              Humidity: {data.humidity}%
            </p>
            <WiNightAltSleetStorm className="text-6xl text-blue-300" />
            <p className="text-xl font-medium text-gray-700">
              Rain Accumulation: {data.rain_accumulation} mm
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <WiLightning className="text-6xl text-yellow-300" />
            <p className="text-xl font-medium text-gray-700">
              Rain Intensity: {data.rain_intensity} mm/h
            </p>
            <WiStrongWind className="text-6xl text-gray-500" />
            <p className="text-xl font-medium text-gray-700">
              Wind Speed: {data.wind_speed} km/h
            </p>
            <WiTornado className="text-6xl text-gray-600" />
            <p className="text-xl font-medium text-gray-700">
              Wind Direction: {data.wind_direction}°
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WeatherCard;
