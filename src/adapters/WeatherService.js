import axios from "axios";

const APIKEY = "YOUR_API_KEY_HERE";

export const getWeatherData = async () => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=0&lon=0&exclude=alerts&units=metric&appid=${APIKEY}`
  );
  const { data } = res;
  console.log("weatherService data: ", data);
  return data;
};
