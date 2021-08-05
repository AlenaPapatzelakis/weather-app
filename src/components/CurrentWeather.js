import "../styles/CurrentWeather.css";

import AdvancedWeatherInfo from "./AdvancedWeatherInfo";
import BasicWeatherInfo from "./BasicWeatherInfo";

const CurrentWeather = ({
  windowWidth,
  breakpoint,
  temp,
  weatherIcon,
  weatherDesc,
  locationName,
  showSearch,
  humidity,
  pressure,
  chanceOfRain,
  windSpeed,
}) => {
  return windowWidth < breakpoint ? (
    <div className="CurrentWeather">
      <BasicWeatherInfo
        temp={temp}
        weatherIcon={weatherIcon}
        weatherDesc={weatherDesc}
        locationName={locationName}
        showSearch={showSearch}
      />
    </div>
  ) : (
    <div className="CurrentWeather">
      <BasicWeatherInfo
        temp={temp}
        weatherIcon={weatherIcon}
        weatherDesc={weatherDesc}
        locationName={locationName}
        showSearch={showSearch}
      />
      <AdvancedWeatherInfo
        humidity={humidity}
        pressure={pressure}
        chanceOfRain={chanceOfRain}
        windSpeed={windSpeed}
      />
    </div>
  );
};

export default CurrentWeather;
