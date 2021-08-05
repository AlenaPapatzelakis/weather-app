import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

import { API_KEY, BASE_URL } from "../utils/WeatherAppUtils";

/*** Get coordinates for a specific location using
 * OpenWeatherMap Geocoding API */

export const useLocationToCoords = (locationName) => {
  const [resultCoordinates, setResultCoordinates] = useState(null);
  const [isLoading, response, error, setUrl] = useFetch();

  useEffect(() => {
    if (locationName) {
      setUrl(
        `${BASE_URL}/geo/1.0/direct?q=${locationName}&limit=1&appid=${API_KEY}`
      );
    }
  }, [locationName, setUrl]);

  useEffect(() => {
    if (response) {
      const { lat, lon } = response[0];
      setResultCoordinates({ lat: lat, lon: lon });
    }
  }, [response]);

  return [resultCoordinates];
};
