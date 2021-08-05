import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

import { BASE_URL, API_KEY } from "../utils/WeatherAppUtils";

/*** Get weather data from coordinates using OpenWeatherMap One Call API */

export const useOneCall = () => {
  const [isLoading, data, error, setUrl] = useFetch();
  const [coordinates, setCoordinates] = useState();

  useEffect(() => {
    if (coordinates) {
      const { lat, lon } = coordinates;
      setUrl(
        `${BASE_URL}/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,current,minutely,daily&units=metric&appid=${API_KEY}`
      );
    }
  }, [coordinates, setUrl]);

  return [isLoading, data, error, setCoordinates];
};
