import { useApi } from "./hooks/useApi";
import CurrentTemp from "./components/CurrentTemp";
import City from "./components/City";
import WeatherIcon from "./components/WeatherIcon";
import "./styles/WeatherApp.css";
import { useEffect } from "react";

const WeatherApp = () => {
  const [isQuerying, weatherData] = useApi();

  useEffect(() => {
    document.title = `${weatherData?.name} - ${Math.floor(
      weatherData?.main.temp
    )}C`;
  });

  return (
    <div className="WeatherApp">
      {isQuerying ? (
        <span>Loading...</span>
      ) : !weatherData ? (
        <span>Weather data currently not available.</span>
      ) : (
        <>
          <City cityName={weatherData.name} />
          <CurrentTemp temp={weatherData.main.temp} />
          <br />
          <WeatherIcon
            weatherIcon={weatherData.weather[0].icon}
            desc={weatherData.weather[0].description}
          />
        </>
      )}
    </div>
  );
};

export default WeatherApp;
