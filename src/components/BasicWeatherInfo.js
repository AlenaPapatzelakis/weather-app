import "../styles/BasicWeatherInfo.css";

import CurrentTemp from "./CurrentTemp";
import Location from "./Location";
import Weather from "./Weather";

const BasicWeatherInfo = ({
  weatherIcon,
  weatherDesc,
  temp,
  locationName,
  showSearch,
}) => {
  return (
    <div className="BasicWeatherInfo">
      <Weather weatherIcon={weatherIcon} desc={weatherDesc} />
      <CurrentTemp temp={temp} />
      <Location locationName={locationName} showSearch={showSearch} />
    </div>
  );
};

export default BasicWeatherInfo;
