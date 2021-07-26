import "../styles/Weekday.css";
import { useState, useEffect } from "react";

const Weekday = (props) => {
  const [weekday, setWeekday] = useState("");
  const [hour, setHour] = useState("");

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
      const dayOfTheWeek = weekdays[new Date(props.timestamp * 1000).getDay()];
      setWeekday(dayOfTheWeek);
    };
    console.log(weekday);
    getWeekday();
  }, [weekday, props.timestamp]);

  useEffect(() => {
    const getHour = () => {
      const date = new Date(props.timestamp * 1000);
      const h = date.getHours();
      setHour(h);
    };
    console.log(hour);
    getHour();
  }, [hour, props.timestamp]);

  if (props.hour) {
    return <p className="Hour">{`${hour}:00`}</p>;
  }

  return <p className="Weekday">{weekday}</p>;
};

export default Weekday;
