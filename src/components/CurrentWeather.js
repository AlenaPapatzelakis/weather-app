import "../styles/CurrentWeather.css";
import AdditionalWeatherInfo from "./AdditionalWeatherInfo";
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
      <AdditionalWeatherInfo
        humidity={props.humidity}
        pressure={props.pressure}
        chanceOfRain={props.chanceOfRain}
        windSpeed={props.windSpeed}
      />
    </div>
  );
};

export default CurrentWeather;
