import "../styles/DayHour.css";

import { useWeekday } from "../hooks/useWeekday";
import { useHour } from "../hooks/useHour";

const DayHour = ({ timestamp, timezone, isHour }) => {
  const [weekday] = useWeekday(timestamp, timezone);
  const [hour] = useHour(timestamp, timezone);

  return isHour ? (
    <p className="Hour">{`${hour}:00`}</p>
  ) : (
    <p className="Weekday">{weekday}</p>
  );
};

export default DayHour;
