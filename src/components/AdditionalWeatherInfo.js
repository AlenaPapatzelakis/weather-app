import Humidity from "./Humidity";
import Pressure from "./Pressure";
import ChanceOfRain from "./ChanceOfRain";
import WindSpeed from "./WindSpeed";

//TODO add generic component for additional weather infos consisting of icon and data

const AdditionalWeatherInfo = (props) => {
  return (
    <div>
      <Humidity humidity={props.humidity} />
      <Pressure pressure={props.pressure} />
      <ChanceOfRain chanceOfRain={props.chanceOfRain} />
      <WindSpeed windSpeed={props.windSpeed} />
    </div>
  );
};

export default AdditionalWeatherInfo;
