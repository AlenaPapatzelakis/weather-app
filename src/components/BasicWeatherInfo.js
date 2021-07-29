import "../styles/BasicWeatherInfo.css";
import CurrentTemp from "./CurrentTemp";
import Location from "./Location";
import Weather from "./Weather";

const BasicWeatherInfo = ({ weatherIcon, weatherDesc, temp, locationName }) => {
  return (
    <div className="BasicWeatherInfo">
      <Weather weatherIcon={weatherIcon} desc={weatherDesc} />
      <CurrentTemp temp={temp} />
      <Location locationName={locationName} />
    </div>
  );
};

export default BasicWeatherInfo;
