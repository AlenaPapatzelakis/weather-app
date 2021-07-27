import "../styles/Weekday.css";
import { useWeekday } from "../hooks/useWeekday";
import { useHour } from "../hooks/useHour";

const Weekday = (props) => {
  const { weekday } = useWeekday(props.timestamp);
  const { hour } = useHour(props.timestamp);

  return props.hour ? (
    <p className="Hour">{`${hour}:00`}</p>
  ) : (
    <p className="Weekday">{weekday}</p>
  );
};

export default Weekday;
