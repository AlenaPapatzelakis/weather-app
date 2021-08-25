import styled from "styled-components";

import { useEffect, useState } from "react";
import { useWindowWidth } from "./hooks/useWindowWidth";
import { useCurrentLocation } from "./hooks/useCurrentLocation";
import { useCoordsToLocation } from "./hooks/useCoordsToLocation";
import { useLocationToCoords } from "./hooks/useLocationToCoords";
import { useOneCall } from "./hooks/useOneCall";

import LocationInput from "./components/LocationInput";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import LoadingIndicator from "./components/LoadingIndicator";
import Background from "./components/Background";

import {
  BREAKPOINT,
  packData,
  decimalToPercent,
  metersPerSecondToKilometersPerHour,
} from "./utils/WeatherAppUtils";

//TODO add opportunity to change to Fahrenheit
//TODO add (better) error handling

const StyledWeatherApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  flex: 1;
  height: 100%;
  width: 100%;
  position: relative;
`;

const BackgroundContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: -10;
`;

const ForegroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 10;
  overflow: hidden auto;
`;

const WeatherApp = () => {
  const [locationName, setLocationName] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [width] = useWindowWidth();

  const [browserCoordinates] = useCurrentLocation();
  const [locationFromCoordinates] = useCoordsToLocation(browserCoordinates);
  const [coordinatesFromLocation] = useLocationToCoords(locationName);
  const [isLoading, weatherData, error, setCoordinates] = useOneCall();

  useEffect(() => {
    setCoordinates(coordinatesFromLocation);
  }, [setCoordinates, coordinatesFromLocation]);

  useEffect(() => {
    setCoordinates(browserCoordinates);
  }, [setCoordinates]);

  useEffect(() => {
    setLocationName(locationFromCoordinates);
  }, [locationFromCoordinates]);

  return (
    <StyledWeatherApp className="WeatherApp">
      {error && <h1>Error when fetching data</h1>}
      {isLoading ? (
        <LoadingIndicator />
      ) : weatherData && !showSearch ? (
        <>
          <BackgroundContainer className="WeatherApp-Background">
            <Background
              weatherCondition={weatherData.hourly[0].weather[0].main}
            />
          </BackgroundContainer>
          <ForegroundContainer className="WeatherApp-Foreground">
            <CurrentWeather
              windowWidth={width}
              breakpoint={BREAKPOINT}
              temp={weatherData.hourly[0].temp}
              locationName={locationName}
              showSearch={(isShowing) => setShowSearch(isShowing)}
              weatherIcon={weatherData.hourly[0].weather[0].icon}
              weatherDesc={weatherData.hourly[0].weather[0].description}
              humidity={packData(
                "water_drop",
                "Humidity",
                weatherData.hourly[0].humidity,
                "%"
              )}
              pressure={packData(
                "compress",
                "Air Pressure",
                weatherData.hourly[0].pressure,
                "hPa"
              )}
              pop={packData(
                "beach_access",
                "Precipitation",
                decimalToPercent(weatherData.hourly[0].pop),
                "%"
              )}
              windSpeed={packData(
                "air",
                "Wind Speed",
                metersPerSecondToKilometersPerHour(
                  weatherData.hourly[0].wind_speed
                ),
                "km/h"
              )}
            />
            <Forecast
              windowWidth={width}
              breakpoint={BREAKPOINT}
              hourlyForecast={weatherData.hourly}
              timezone={weatherData.timezone_offset}
            />
          </ForegroundContainer>
        </>
      ) : (
        <LocationInput
          onSearch={(location) => {
            setLocationName(location);
            setShowSearch(false);
          }}
        />
      )}
    </StyledWeatherApp>
  );
};

export default WeatherApp;
