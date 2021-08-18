import styled from "styled-components";

import Temperature from "./Temperature";
import Location from "./Location";
import Weather from "./Weather";

const StyledBasicWeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 39.8em) {
    align-items: flex-start;
  }

  > .Temperature {
    font-size: min(15vw, 5rem);
  }

  > .Weather > .Weather-description {
    font-size: min(5vw, 3rem);
  }
`;

const BasicWeatherInfo = ({
  weatherIcon,
  weatherDesc,
  temp,
  locationName,
  showSearch,
}) => {
  return (
    <StyledBasicWeatherInfo className="BasicWeatherInfo">
      <Weather weatherIcon={weatherIcon} desc={weatherDesc} />
      <Temperature temp={temp} />
      <Location locationName={locationName} showSearch={showSearch} />
    </StyledBasicWeatherInfo>
  );
};

export default BasicWeatherInfo;
