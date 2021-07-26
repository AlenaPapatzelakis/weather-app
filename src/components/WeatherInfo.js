import "../styles/WeatherInfo.css";

const WeatherInfo = (props) => {
  const capitalizeFirstLetter = (str) =>
    str.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());

  return (
    <div className="WeatherInfo-container">
      <img
        className="WeatherInfo-icon"
        src={`http://openweathermap.org/img/wn/${props.weatherIcon}@4x.png`}
        alt={props.desc}
      />
      <p className="WeatherInfo-description">
        {capitalizeFirstLetter(props.desc)}
      </p>
    </div>
  );
};

export default WeatherInfo;
