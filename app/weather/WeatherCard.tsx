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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-lg p-5"
    >
      <div className="flex items-center space-x-4">
        <WiDaySunny className="text-4xl text-yellow-500" />
        <div>
          <p className="text-xl font-medium text-gray-700">{data.location}</p>
          <p className="text-xl font-medium text-gray-700">
            Temperature: {data.temperature}°C
          </p>
        </div>
        <WiDaySunny className="text-4xl text-yellow-500" />
        <div>
          <p className="text-xl font-medium text-gray-700">
            Temperature: {data.temperature}°C
          </p>
        </div>
        <WiSprinkle className="text-4xl text-yellow-500" />
        <div>
          <p className="text-xl font-medium text-gray-700">
            Humidity: {data.humidity}%
          </p>
        </div>
        <WiNightAltSleetStorm className="text-4xl text-yellow-500" />
        <div>
          <p className="text-xl font-medium text-gray-700">
            Rain Accumulation: {data.rain_accumulation} mm
          </p>
        </div>
        <WiLightning className="text-4xl text-yellow-500" />
        <div>
          <p className="text-xl font-medium text-gray-700">
            Rain Intensity: {data.rain_intensity} mm/h
          </p>
        </div>
        <WiStrongWind className="text-4xl text-yellow-500" />
        <div>
          <p className="text-xl font-medium text-gray-700">
            Wind Speed: {data.wind_speed} km/h
          </p>
        </div>
        <WiTornado className="text-4xl text-yellow-500" />
        <div>
          <p className="text-xl font-medium text-gray-700">
            Wind Direction: {data.wind_direction}°
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherCard;
