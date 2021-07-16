const WeatherIcon = (props) => {
  return (
    <img
      src={`http://openweathermap.org/img/wn/${props.weatherIcon}@4x.png`}
      alt={props.desc}
    />
  );
};

export default WeatherIcon;
