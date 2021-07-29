import "../styles/Forecast.css";
import ForecastTile from "./ForecastTile";
import DayHour from "./DayHour";
import { useWindowWidth } from "../hooks/useWindowWidth";

//TODO show more ForecastTiles if there is enough space

const NUM_OF_HOURS = 5;

const Forecast = (props) => {
  return (
    <div className="Forecast">
      <DayHour hour={false} timestamp={props.hourlyForecast[0].dt} />
      <div className="Forecast-tileContainer">
        {props.hourlyForecast.slice(1, NUM_OF_HOURS).map((data) => (
          <ForecastTile
            key={data.dt}
            timestamp={data.dt}
            temp={data.temp}
            weatherIcon={data.weather[0].icon}
            weatherDesc={data.weather[0].description}
          />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
