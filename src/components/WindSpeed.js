//TODO write utility function to convert windspeed to km/h

const WindSpeed = (props) => {
  return (
    <div className="WindSpeed">
      <p className="WindSpeed-title">
        <i className="material-icons">air</i> Wind Speed
      </p>
      <p>{props.windSpeed} m/s</p>
    </div>
  );
};

export default WindSpeed;
