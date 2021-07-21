import "../styles/ForecastTile.css";
import CurrentTemp from "./CurrentTemp";
import WeatherIcon from "./WeatherIcon";

const ForecastTile = (props) => {
  return (
    <div className="ForecastTile">
      <CurrentTemp temp={props.temp} />
      <WeatherIcon weatherIcon={props.weatherIcon} desc={props.weatherDesc} />
    </div>
  );
};

export default ForecastTile;
