import styled from "styled-components";

import { useWeekday } from "../hooks/useWeekday";
import { useHour } from "../hooks/useHour";

const Hour = styled.p`
  font-size: min(7vw, 2rem);
`;

const Weekday = styled.p`
  font-size: min(7vw, 2rem);
  margin: 0;
  padding-top: min(8vw, 2rem);
`;

const DayHour = ({ timestamp, timezone, isHour }) => {
  const [weekday] = useWeekday(timestamp, timezone);
  const [hour] = useHour(timestamp, timezone);

  return isHour ? (
    <Hour className="Hour">{`${hour}:00`}</Hour>
  ) : (
    <Weekday className="Weekday">{weekday}</Weekday>
  );
};

export default DayHour;
