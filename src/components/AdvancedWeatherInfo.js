import "../styles/AdvancedWeatherInfo.css";
import AdvancedWeatherInfoTile from "./AdvancedWeatherInfoTile";

const AdvancedWeatherInfo = (props) => {
  return (
    <div className="AdvancedWeatherInfo">
      {Object.keys(props).map((d) => (
        <AdvancedWeatherInfoTile
          icon={props[d].icon}
          title={props[d].title}
          data={props[d].data}
          unit={props[d].unit}
        />
      ))}
    </div>
  );
};

export default AdvancedWeatherInfo;
