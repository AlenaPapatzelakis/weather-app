import { useState, useEffect } from "react";

export const useHour = (timestamp) => {
  const [hour, setHour] = useState("");

  useEffect(() => {
    const getHour = () => {
      const date = new Date(timestamp * 1000);
      const h = date.getHours();
      setHour(h);
    };
    getHour();
  }, [timestamp, hour]);

  return { hour };
};
