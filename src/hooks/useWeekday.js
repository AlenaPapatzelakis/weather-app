import { useEffect, useState } from "react";

import { WEEKDAYS } from "../utils/WeatherAppUtils";

/*** Convert a UNIX timestamp and timezone
 *  into the timezone specific weekday */

export const useWeekday = (timestamp, timezone) => {
  const [weekday, setWeekday] = useState("");

  useEffect(() => {
    const getWeekday = () => {
      const ts = timestamp * 1000;
      const offset = timezone * 1000;
      const date = new Date(ts + offset);
      const dayOfTheWeek = WEEKDAYS[date.getDay()];
      setWeekday(dayOfTheWeek);
    };
    getWeekday();
  }, [timestamp, timezone, weekday]);

  return [weekday];
};
