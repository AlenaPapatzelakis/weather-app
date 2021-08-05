import { useEffect, useState } from "react";

/*** Use Geolocation API to access a user's current position */

export const useCurrentLocation = () => {
  const [geoError, setGeoError] = useState("");
  const [position, setPosition] = useState(null);

  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;
    setPosition({
      lat: latitude,
      lon: longitude,
    });
  };

  const handleError = (error) => {
    setGeoError(error.message);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setGeoError("Geolocation is not supported.");
    }
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, [position]);

  return [position];
};
