export const API_KEY = "YOUR_API_KEY_HERE";
export const BASE_URL = "http://api.openweathermap.org/data/2.5";

// 636(px) equals 39.8em
export const BREAKPOINT = 636;

export const packData = (icon, title, data, unit) => {
  return { icon: icon, title: title, data: data, unit: unit };
};

export const metersPerSecondToKilometersPerHour = (value) =>
  (value * 3.6).toFixed(2);

export const decimalToPercent = (decimal) => decimal * 100;

export const capitalizeFirstLetter = (str) =>
  str.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());

export const getCoordinates = async () => {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    return {
      lon: position.coords.longitude,
      lat: position.coords.latitude,
    };
  } catch (e) {
    console.error(e);
  }
};
