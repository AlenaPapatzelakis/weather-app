import { useCurrentWeatherData } from "./hooks/useCurrentWeatherData";
import { useForecastWeatherData } from "./hooks/useForecastWeatherData";
import { useWindowWidth } from "./hooks/useWindowWidth";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import "./styles/WeatherApp.css";
import {
  packData,
  metersPerSecondToKilometersPerHour,
  decimalToPercent,
  BREAKPOINT,
} from "./utils/WeatherAppUtils";

//TODO add opportunity to change to Fahrenheit

const WeatherApp = () => {
  const [currentWeatherData, isQueryingCurrentWeatherData] =
    useCurrentWeatherData();
  const [forecastWeatherData, isQueryingForecastWeatherData] =
    useForecastWeatherData();
  const [width] = useWindowWidth();

  return (
    <div className="WeatherApp">
      {isQueryingCurrentWeatherData || isQueryingForecastWeatherData ? (
        <p>Loading...</p>
      ) : !currentWeatherData || !forecastWeatherData ? (
        <p>Weather data currently not available.</p>
      ) : (
        <>
          <CurrentWeather
            windowWidth={width}
            breakpoint={BREAKPOINT}
            temp={currentWeatherData.main.temp}
            locationName={currentWeatherData.name}
            weatherIcon={currentWeatherData.weather[0].icon}
            weatherDesc={currentWeatherData.weather[0].description}
            humidity={packData(
              "water_drop",
              "Humidity",
              currentWeatherData.main.humidity,
              "%"
            )}
            pressure={packData(
              "compress",
              "Air Pressure",
              currentWeatherData.main.pressure,
              "hPa"
            )}
            chanceOfRain={packData(
              "beach_access",
              "Chance of Rain",
              decimalToPercent(forecastWeatherData.hourly[0].pop),
              "%"
            )}
            windSpeed={packData(
              "air",
              "Wind Speed",
              metersPerSecondToKilometersPerHour(currentWeatherData.wind.speed),
              "km/h"
            )}
          />
          <Forecast
            windowWidth={width}
            breakpoint={BREAKPOINT}
            hourlyForecast={forecastWeatherData.hourly}
          />
        </>
      )}
    </div>
  );
};

export default WeatherApp;
