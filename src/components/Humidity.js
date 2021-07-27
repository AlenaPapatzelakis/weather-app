const Humidity = (props) => {
  return (
    <div className="Humidity">
      <p className="Humidity-title">
        <i className="material-icons-outlined">water_drop</i> Humidity
      </p>
      <p>{props.humidity} %</p>
    </div>
  );
};

export default Humidity;
