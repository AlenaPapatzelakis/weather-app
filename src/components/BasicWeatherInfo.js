import "../styles/BasicWeatherInfo.css";
import CurrentTemp from "./CurrentTemp";
import Location from "./Location";
import WeatherInfo from "./WeatherInfo";

const BasicWeatherInfo = (props) => {
  return (
    <div className="BasicWeatherInfo">
      <WeatherInfo weatherIcon={props.weatherIcon} desc={props.weatherDesc} />
      <CurrentTemp temp={props.temp} />
      <Location locationName={props.locationName} />
    </div>
  );
};

export default BasicWeatherInfo;
