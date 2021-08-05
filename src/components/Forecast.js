import "../styles/Forecast.css";

import ForecastTile from "./ForecastTile";
import DayHour from "./DayHour";

//TODO show more ForecastTiles if there is enough space

const NUM_OF_FORECASTS = 10;

const Forecast = ({ windowWidth, breakpoint, hourlyForecast, timezone }) => {
  return (
    <div className="Forecast">
      <DayHour
        hour={false}
        timestamp={hourlyForecast[0].dt}
        timezone={timezone}
      />
      <div className="Forecast-tileContainer">
        {hourlyForecast.slice(1, NUM_OF_FORECASTS).map((data) => (
          <ForecastTile
            key={data.dt}
            timestamp={data.dt}
            timezone={timezone}
            temp={data.temp}
            weatherIcon={data.weather[0].icon}
            weatherDesc={data.weather[0].description}
            windowWidth={windowWidth}
            breakpoint={breakpoint}
          />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
