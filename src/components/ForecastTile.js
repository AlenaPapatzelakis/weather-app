import styled from "styled-components";

import Temperature from "./Temperature";
import Weather from "./Weather";
import DayHour from "./DayHour";

const StyledForecastTile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    border-bottom: 1px solid #fff;
  }

  @media only screen and (min-width: 39.8em) {
    flex-direction: column;

    &:not(:last-child) {
      border-bottom: none;
    }
  }

  > .Hour {
    margin: 0;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media only screen and (min-width: 39.8em) {
    align-items: center;
  }

  > .Weather > .Weather-icon {
    width: min(25vw, 13rem);
  }
`;

const ForecastTile = ({
  timestamp,
  timezone,
  temp,
  weatherIcon,
  weatherDesc,
  windowWidth,
  breakpoint,
}) => {
  //TODO improve conditional rendering
  return windowWidth < breakpoint ? (
    <StyledForecastTile className="ForecastTile">
      <DayHour isHour={true} timestamp={timestamp} timezone={timezone} />
      <StyledContainer className="ForecastTile-weather">
        <Temperature temp={temp} />
        <Weather desc={weatherDesc} />
      </StyledContainer>
    </StyledForecastTile>
  ) : (
    <StyledForecastTile className="ForecastTile">
      <DayHour isHour={true} timestamp={timestamp} timezone={timezone} />
      <StyledContainer className="ForecastTile-weather">
        <Weather weatherIcon={weatherIcon} />
        <Temperature temp={temp} />
      </StyledContainer>
    </StyledForecastTile>
  );
};

export default ForecastTile;
