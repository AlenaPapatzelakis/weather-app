import "../styles/WeatherIcon.css";

const WeatherIcon = (props) => {
  return (
    <img
      className="WeatherIcon"
      src={`http://openweathermap.org/img/wn/${props.weatherIcon}@4x.png`}
      alt={props.desc}
    />
  );
};

export default WeatherIcon;
