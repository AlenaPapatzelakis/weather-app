const ChanceOfRain = (props) => {
  return (
    <div className="ChanceOfRain">
      <p className="ChanceOfRain-title">
        <i className="material-icons-outlined">beach_access</i> Chance of Rain
      </p>
      <p>{props.chanceOfRain} %</p>
    </div>
  );
};

export default ChanceOfRain;
