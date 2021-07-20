import "../styles/WeatherIcon.css";

const WeatherIcon = (props) => {
  return (
    <div className="WeatherIcon">
      <img
        src={`http://openweathermap.org/img/wn/${props.weatherIcon}@4x.png`}
        alt={props.desc}
      />
    </div>
  );
};

export default WeatherIcon;
