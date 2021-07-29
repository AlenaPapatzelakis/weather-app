import "../styles/ForecastTile.css";
import CurrentTemp from "./CurrentTemp";
import Weather from "./Weather";
import DayHour from "./DayHour";
import { useWindowWidth } from "../hooks/useWindowWidth";

const BREAKPOINT = 636;

const ForecastTile = (props) => {
  const { width } = useWindowWidth();

  return width < BREAKPOINT ? (
    <div className="ForecastTile">
      <DayHour hour={true} timestamp={props.timestamp} />
      <div className="ForecastTile-weather">
        <CurrentTemp temp={props.temp} />
        <Weather desc={props.weatherDesc} />
      </div>
    </div>
  ) : (
    <div className="ForecastTile">
      <DayHour hour={true} timestamp={props.timestamp} />
      <div className="ForecastTile-weather">
        <Weather weatherIcon={props.weatherIcon} />
        <CurrentTemp temp={props.temp} />
      </div>
    </div>
  );
};

export default ForecastTile;
