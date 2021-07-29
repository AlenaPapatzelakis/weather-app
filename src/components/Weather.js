import "../styles/Weather.css";
import { capitalizeFirstLetter } from "../utils/WeatherAppUtils";

const Weather = ({ weatherIcon, desc }) => {
  return (
    <div className="Weather">
      {weatherIcon && (
        <img
          className="Weather-icon"
          src={`http://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
          alt={desc}
        />
      )}
      {desc && (
        <p className="Weather-description">{capitalizeFirstLetter(desc)}</p>
      )}
    </div>
  );
};

export default Weather;
