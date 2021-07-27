export const packData = (icon, title, data, unit) => {
  return { icon: icon, title: title, data: data, unit: unit };
};

export const metersPerSecondToKilometersPerHour = (value) => {
  return (value * 3.6).toFixed(2);
};

export const decimalToPercent = (decimal) => {
  return decimal * 100;
};
