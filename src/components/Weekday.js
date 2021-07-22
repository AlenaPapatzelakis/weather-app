import "../styles/Weekday.css";
import { useState, useEffect } from "react";

const Weekday = (props) => {
  const [weekday, setWeekday] = useState();

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
      const dayOfTheWeek = weekdays[new Date(props.weekdayNum * 1000).getDay()];
      setWeekday(dayOfTheWeek);
    };
    getWeekday();
  }, [weekday, props.weekdayNum]);

  return <h2 className="Weekday">{weekday}</h2>;
};

export default Weekday;
