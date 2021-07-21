import axios from "axios";
import { useState, useEffect } from "react";

const BASE_URL = "http://api.openweathermap.org/data/2.5";
const API_KEY = "YOUR_API_KEY_HERE";

export const useApi = () => {
  const [isQuerying, setIsQuerying] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const getCoordinates = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      return {
        lon: position.coords.longitude,
        lat: position.coords.latitude,
      };
    } catch (e) {
      console.error(e);
    }
  };

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

  useEffect(() => {
    const getForecastWeatherData = async () => {
      try {
        setIsQuerying(true);
        const { lat, lon } = await getCoordinates();
        const res = await axios.get(
          `${BASE_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        );
        const { data } = res;
        console.log("Forecast: ", data);
        setForecastData(data);
        setIsQuerying(false);
      } catch (e) {
        console.error("Forecast data is currently not available.", e);
      }
    };
    getForecastWeatherData();
  }, []);

  return [isQuerying, weatherData, forecastData];
};
