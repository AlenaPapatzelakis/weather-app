import { useState, useEffect } from "react";
import { API_KEY, BASE_URL, getCoordinates } from "../utils/WeatherAppUtils";
import axios from "axios";

export const useCurrentWeatherData = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isQuerying, setIsQuerying] = useState(false);
  useEffect(() => {
    const getCurrentWeatherData = async () => {
      try {
        setIsQuerying(true);
        const { lat, lon } = await getCoordinates();
        const res = await axios.get(
          `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        );
        const { data } = res;
        console.log("Current: ", data);
        setWeatherData(data);
        setIsQuerying(false);
      } catch (e) {
        console.error("Weather data is currently not available.", e);
      }
    };
    getCurrentWeatherData();
  }, []);
  return [weatherData, isQuerying];
};
