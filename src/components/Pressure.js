const Pressure = (props) => {
  return (
    <div className="Pressure">
      <p className="Pressure-title">
        <i className="material-icons-outlined">compress</i> Air Pressure
      </p>
      <p>{props.pressure} hPa</p>
    </div>
  );
};

export default Pressure;
