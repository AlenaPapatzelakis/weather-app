import styled from "styled-components";

import AdvancedWeatherInfo from "./AdvancedWeatherInfo";
import BasicWeatherInfo from "./BasicWeatherInfo";

const StyledCurrentWeather = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 39.8em) {
    justify-content: space-between;
    padding: 0 min(4vw, 4rem) 0 min(4vw, 4rem);
  }
`;

const CurrentWeather = ({
  windowWidth,
  breakpoint,
  temp,
  weatherIcon,
  weatherDesc,
  locationName,
  showSearch,
  humidity,
  pressure,
  pop,
  windSpeed,
}) => {
  return windowWidth < breakpoint ? (
    <StyledCurrentWeather className="CurrentWeather">
      <BasicWeatherInfo
        temp={temp}
        weatherIcon={weatherIcon}
        weatherDesc={weatherDesc}
        locationName={locationName}
        showSearch={showSearch}
      />
    </StyledCurrentWeather>
  ) : (
    <StyledCurrentWeather className="CurrentWeather">
      <BasicWeatherInfo
        temp={temp}
        weatherIcon={weatherIcon}
        weatherDesc={weatherDesc}
        locationName={locationName}
        showSearch={showSearch}
      />
      <AdvancedWeatherInfo
        humidity={humidity}
        pressure={pressure}
        pop={pop}
        windSpeed={windSpeed}
      />
    </StyledCurrentWeather>
  );
};

export default CurrentWeather;
