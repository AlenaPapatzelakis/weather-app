import "../styles/AdvancedWeatherInfoTile.css";

const AdvancedWeatherInfoTile = (props) => {
  return (
    <div className="AdvancedWeatherInfoTile">
      <i className="AdvancedWeatherInfoTile-icon material-icons-outlined">
        {props.icon}
      </i>
      <div className="AdvancedWeatherInfoTile-container">
        <p className="AdvancedWeatherInfoTile-title">{props.title}</p>
        <p className="AdvancedWeatherInfoTile-data">{props.data}</p>
      </div>
    </div>
  );
};

export default AdvancedWeatherInfoTile;
