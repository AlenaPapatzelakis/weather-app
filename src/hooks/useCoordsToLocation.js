import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

import { API_KEY, BASE_URL } from "../utils/WeatherAppUtils";

/*** Get the location name from specific coordinates using
 * OpenWeatherMap Geolocation API */
export const useCoordsToLocation = (coordinates) => {
  const [isLoading, response, error, setUrl] = useFetch();
  const [resultLocationName, setResultLocationName] = useState("");

  useEffect(() => {
    if (coordinates) {
      const { lat, lon } = coordinates;
      setUrl(
        `${BASE_URL}/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`
      );
    }
  }, [coordinates, setUrl]);

  useEffect(() => {
    if (response) {
      setResultLocationName(response[0].name);
      console.log(response[0].name);
    }
  }, [response]);

  return [resultLocationName];
};
