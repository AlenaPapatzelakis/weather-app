import { useState, useEffect } from "react";
import { API_KEY, BASE_URL, getCoordinates } from "../utils/WeatherAppUtils";
import axios from "axios";

export const useForecastWeatherData = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isQuerying, setIsQuerying] = useState(false);
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
        setWeatherData(data);
        setIsQuerying(false);
      } catch (e) {
        console.error("Forecast data is currently not available.", e);
      }
    };
    getForecastWeatherData();
  }, []);
  return [weatherData, isQuerying];
};
