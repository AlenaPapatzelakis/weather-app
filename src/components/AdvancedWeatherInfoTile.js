import "../styles/AdvancedWeatherInfoTile.css";

const AdvancedWeatherInfoTile = ({ icon, title, data, unit }) => {
  return (
    <div className="AdvancedWeatherInfoTile">
      <i className="AdvancedWeatherInfoTile-icon material-icons-outlined">
        {icon}
      </i>
      <div className="AdvancedWeatherInfoTile-container">
        <p className="AdvancedWeatherInfoTile-title">{title}</p>
        <p className="AdvancedWeatherInfoTile-data">{`${data} ${unit}`}</p>
      </div>
    </div>
  );
};

export default AdvancedWeatherInfoTile;
