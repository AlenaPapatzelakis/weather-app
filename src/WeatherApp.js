import { useEffect, useState } from "react";
import { getWeatherData } from "./adapters/WeatherService";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherData = async () => {
    const data = await getWeatherData();
    setWeatherData(data);
  };

  useEffect(() => {
    handleWeatherData();
  }, []);

  return (
    <div>
      <h1>Weather App!</h1>
      <span>{weatherData?.current.temp}</span>
    </div>
  );
};

export default WeatherApp;
