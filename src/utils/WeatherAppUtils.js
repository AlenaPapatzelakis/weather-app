export const API_KEY = "YOUR_API_KEY_HERE";
export const BASE_URL = "http://api.openweathermap.org";

/*** Breakpoint used for media queries (636(px) equals 39.8em) */
export const BREAKPOINT = 636;

/*** String array containing all weekdays */
export const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/*** Unite individual advanced weather data to one object */
export const packData = (icon, title, data, unit) => {
  return { icon: icon, title: title, data: data, unit: unit };
};

export const metersPerSecondToKilometersPerHour = (value) =>
  (value * 3.6).toFixed(2);

export const decimalToPercent = (decimal) => Math.floor(decimal * 100);

export const capitalizeFirstLetter = (str) =>
  str.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());

export const capitalizeAndTrimInput = (input) =>
  capitalizeFirstLetter(input).trim();
