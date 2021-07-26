import "../styles/ForecastTile.css";
import CurrentTemp from "./CurrentTemp";
import WeatherInfo from "./WeatherInfo";
import Weekday from "./Weekday";
import { useWindowWidth } from "../hooks/useWindowWidth";

const BREAKPOINT = 636;

const ForecastTile = (props) => {
  const { width } = useWindowWidth();

  return width < BREAKPOINT ? (
    <div className="ForecastTile">
      <Weekday hour={true} timestamp={props.timestamp} />
      <div className="ForecastTile-weather">
        <CurrentTemp temp={props.temp} />
        <WeatherInfo weatherIcon={props.weatherIcon} desc={props.weatherDesc} />
      </div>
    </div>
  ) : (
    <div className="ForecastTile">
      <Weekday hour={true} timestamp={props.timestamp} />
      <div className="ForecastTile-weather">
        <WeatherInfo weatherIcon={props.weatherIcon} desc={props.weatherDesc} />
        <CurrentTemp temp={props.temp} />
      </div>
    </div>
  );
};

export default ForecastTile;
