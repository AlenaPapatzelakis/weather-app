import styled from "styled-components";

import { capitalizeFirstLetter } from "../utils/WeatherAppUtils";

const StyledWeather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 39.8em) {
    align-items: flex-start;
  }
`;

const Icon = styled.img`
  width: min(45vw, 20rem);
  height: auto;
`;

const Description = styled.p`
  margin: 0;
  font-size: min(5vw, 1.5rem);
`;

const Weather = ({ weatherIcon, desc }) => {
  return (
    <StyledWeather className="Weather">
      {weatherIcon && (
        <Icon
          className="Weather-icon"
          src={`http://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
          alt={desc}
        />
      )}
      {desc && (
        <Description className="Weather-description">
          {capitalizeFirstLetter(desc)}
        </Description>
      )}
    </StyledWeather>
  );
};

export default Weather;
