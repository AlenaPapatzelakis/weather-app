import AdvancedWeatherInfoTile from "./AdvancedWeatherInfoTile";

import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const StyledAdvancedWeatherInfo = styled.div`
  display: none;
  @media only screen and (min-width: 39.8em) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 4rem;
  }
`;

const AdvancedWeatherInfo = (props) => {
  return (
    <StyledAdvancedWeatherInfo className="AdvancedWeatherInfo">
      {Object.keys(props).map((d) => (
        <AdvancedWeatherInfoTile
          key={uuidv4()}
          icon={props[d].icon}
          title={props[d].title}
          data={props[d].data}
          unit={props[d].unit}
        />
      ))}
    </StyledAdvancedWeatherInfo>
  );
};

export default AdvancedWeatherInfo;
