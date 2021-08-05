import { useState, useEffect } from "react";

/*** Convert a UNIX timestamp and timezone
 *  into the timezone specific hour */

export const useHour = (timestamp, timezone) => {
  const [hour, setHour] = useState(0);

  useEffect(() => {
    const getHour = () => {
      const ts = timestamp * 1000;
      const offset = timezone * 1000;
      const date = new Date(ts + offset);
      const h = date.getUTCHours();
      setHour(h);
    };
    getHour();
  }, [timestamp, timezone, hour]);

  return [hour];
};
