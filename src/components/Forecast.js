import styled from "styled-components";

import ForecastTile from "./ForecastTile";
import DayHour from "./DayHour";

const NUM_OF_FORECASTS = 25;

const StyledForecast = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem 0.5rem 0.5rem;

  @media only screen and (min-width: 39.8em) {
    padding: min(4vw, 4rem) min(4vw, 4rem) 3rem min(4vw, 4rem);
  }

  > .Weekday {
    padding: min(5vw, 2rem) 0;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto hidden;

  @media only screen and (min-width: 39.8em) {
    flex-direction: row;
  }
`;

const Forecast = ({ windowWidth, breakpoint, hourlyForecast, timezone }) => {
  return (
    <StyledForecast className="Forecast">
      <DayHour
        hour={false}
        timestamp={hourlyForecast[0].dt}
        timezone={timezone}
      />
      <StyledContainer className="Forecast-tileContainer">
        {hourlyForecast.slice(1, NUM_OF_FORECASTS).map((data) => (
          <ForecastTile
            key={data.dt}
            timestamp={data.dt}
            timezone={timezone}
            temp={data.temp}
            weatherIcon={data.weather[0].icon}
            weatherDesc={data.weather[0].description}
            windowWidth={windowWidth}
            breakpoint={breakpoint}
          />
        ))}
      </StyledContainer>
    </StyledForecast>
  );
};

export default Forecast;
