import { useEffect, useState } from "react";

export const useWeekday = (timestamp) => {
  const [weekday, setWeekday] = useState("");

  useEffect(() => {
    const getWeekday = () => {
      const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const date = new Date(timestamp * 1000);
      const dayOfTheWeek = weekdays[date.getDay()];
      setWeekday(dayOfTheWeek);
    };
    getWeekday();
  }, [timestamp, weekday]);

  return [weekday];
};
