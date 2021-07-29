import "../styles/Weather.css";

const Weather = (props) => {
  const capitalizeFirstLetter = (str) =>
    str.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());

  return (
    <div className="Weather">
      {props.weatherIcon && (
        <img
          className="Weather-icon"
          src={`http://openweathermap.org/img/wn/${props.weatherIcon}@4x.png`}
          alt={props.desc}
        />
      )}
      {props.desc && (
        <p className="Weather-description">
          {capitalizeFirstLetter(props.desc)}
        </p>
      )}
    </div>
  );
};

export default Weather;
