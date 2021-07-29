export const packData = (icon, title, data, unit) => {
  return { icon: icon, title: title, data: data, unit: unit };
};

export const metersPerSecondToKilometersPerHour = (value) =>
  (value * 3.6).toFixed(2);

export const decimalToPercent = (decimal) => decimal * 100;

export const capitalizeFirstLetter = (str) =>
  str.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
