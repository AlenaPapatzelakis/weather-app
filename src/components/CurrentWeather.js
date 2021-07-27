import "../styles/CurrentWeather.css";
import AdvancedWeatherInfo from "./AdvancedWeatherInfo";
import BasicWeatherInfo from "./BasicWeatherInfo";

//TODO change general props to specific {...} props
const CurrentWeather = (props) => {
  return (
    <div className="CurrentWeather">
      <BasicWeatherInfo
        temp={props.temp}
        weatherIcon={props.weatherIcon}
        weatherDesc={props.weatherDesc}
        locationName={props.locationName}
      />
      <AdvancedWeatherInfo
        humidity={props.humidity}
        pressure={props.pressure}
        chanceOfRain={props.chanceOfRain}
        windSpeed={props.windSpeed}
      />
    </div>
  );
};

export default CurrentWeather;
