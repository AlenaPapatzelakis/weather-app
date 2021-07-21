import { useApi } from "./hooks/useApi";
import CurrentTemp from "./components/CurrentTemp";
import City from "./components/City";
import WeatherIcon from "./components/WeatherIcon";
import Forecast from "./components/Forecast";
import "./styles/WeatherApp.css";
import { useEffect } from "react";

const WeatherApp = () => {
  const [isQuerying, weatherData, forecastData] = useApi();

  useEffect(() => {
    document.title = `${weatherData?.name} - ${Math.floor(
      weatherData?.main.temp
    )}C`;
  });

  return (
    <div className="WeatherApp">
      {isQuerying ? (
        <span>Loading...</span>
      ) : !weatherData || !forecastData ? (
        <span>Weather data currently not available.</span>
      ) : (
        <>
          <div className="WeatherApp-container">
            <CurrentTemp temp={weatherData.main.temp} />
            <City cityName={weatherData.name} />
            <WeatherIcon
              weatherIcon={weatherData.weather[0].icon}
              desc={weatherData.weather[0].description}
            />
          </div>
          <Forecast dailyForecast={forecastData.daily} />
        </>
      )}
    </div>
  );
};

export default WeatherApp;
