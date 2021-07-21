import "../styles/Forecast.css";
import ForecastTile from "./ForecastTile";

const NUM_OF_DAYS = 3;

const Forecast = (props) => {
  return (
    <div className="Forecast">
      {props.dailyForecast.slice(0, NUM_OF_DAYS).map((data) => (
        <ForecastTile
          key={data.dt}
          temp={data.temp.day}
          weatherDesc={data.weather[0].description}
          weatherIcon={data.weather[0].icon}
        />
      ))}
    </div>
  );
};

export default Forecast;
