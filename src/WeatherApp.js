import { useApi } from "../src/hooks/useApi";

const WeatherApp = () => {
  const [isQuerying, weatherData] = useApi();

  if (isQuerying) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <h1>App!</h1>
      <h2>{weatherData?.name}</h2>
      <span>{weatherData?.main.temp}</span>
    </div>
  );
};

export default WeatherApp;
