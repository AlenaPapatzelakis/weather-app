import axios from "axios";
import { useState, useEffect } from "react";

const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "YOUR_API_KEY_HERE";

export const useApi = () => {
  const [isQuerying, setIsQuerying] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

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
    const getData = async () => {
      try {
        setIsQuerying(true);
        const { lat, lon } = await getCoordinates();
        const res = await axios.get(
          `${BASE_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        );
        const { data } = res;
        console.log(data);
        setWeatherData(data);
        setIsQuerying(false);
      } catch (e) {
        console.error("Weather data is currently not available.", e);
      }
    };
    getData();
  }, []);

  return [isQuerying, weatherData];
};
