import "../styles/ForecastTile.css";

import CurrentTemp from "./CurrentTemp";
import Weather from "./Weather";
import DayHour from "./DayHour";

const ForecastTile = ({
  timestamp,
  timezone,
  temp,
  weatherIcon,
  weatherDesc,
  windowWidth,
  breakpoint,
}) => {
  //TODO improve conditional rendering
  return windowWidth < breakpoint ? (
    <div className="ForecastTile">
      <DayHour isHour={true} timestamp={timestamp} timezone={timezone} />
      <div className="ForecastTile-weather">
        <CurrentTemp temp={temp} />
        <Weather desc={weatherDesc} />
      </div>
    </div>
  ) : (
    <div className="ForecastTile">
      <DayHour isHour={true} timestamp={timestamp} timezone={timezone} />
      <div className="ForecastTile-weather">
        <Weather weatherIcon={weatherIcon} />
        <CurrentTemp temp={temp} />
      </div>
    </div>
  );
};

export default ForecastTile;
