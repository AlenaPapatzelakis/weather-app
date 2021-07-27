import { useApi } from "./hooks/useApi";
import CurrentWeather from "./components/CurrentWeather";
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

  const packData = (icon, title, data) => {
    return { icon: icon, title: title, data: data };
  };

  return (
    <div className="WeatherApp">
      {isQuerying ? (
        <span>Loading...</span>
      ) : !weatherData || !forecastData ? (
        <span>Weather data currently not available.</span>
      ) : (
        <>
          <CurrentWeather
            temp={weatherData.main.temp}
            locationName={weatherData.name}
            weatherIcon={weatherData.weather[0].icon}
            weatherDesc={weatherData.weather[0].description}
            humidity={packData(
              "water_drop",
              "Humidity",
              weatherData.main.humidity
            )}
            pressure={packData(
              "compress",
              "Air Pressure",
              weatherData.main.pressure
            )}
            chanceOfRain={packData(
              "beach_access",
              "Chance of Rain",
              forecastData.hourly[0].pop
            )}
            windSpeed={packData("air", "Wind Speed", weatherData.wind.speed)}
          />
          <Forecast hourlyForecast={forecastData.hourly} />
        </>
      )}
    </div>
  );
};

export default WeatherApp;
