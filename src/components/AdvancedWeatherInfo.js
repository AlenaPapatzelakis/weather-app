import "../styles/AdvancedWeatherInfo.css";

import AdvancedWeatherInfoTile from "./AdvancedWeatherInfoTile";

import { v4 as uuidv4 } from "uuid";

const AdvancedWeatherInfo = (props) => {
  return (
    <div className="AdvancedWeatherInfo">
      {Object.keys(props).map((d) => (
        <AdvancedWeatherInfoTile
          key={uuidv4()}
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
