import "../styles/DayHour.css";
import { useWeekday } from "../hooks/useWeekday";
import { useHour } from "../hooks/useHour";

const DayHour = ({ timestamp, isHour }) => {
  const [weekday] = useWeekday(timestamp);
  const [hour] = useHour(timestamp);

  return isHour ? (
    <p className="Hour">{`${hour}:00`}</p>
  ) : (
    <p className="Weekday">{weekday}</p>
  );
};

export default DayHour;
