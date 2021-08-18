import styled from "styled-components";

const StyledTemperature = styled.p`
  color: #fff;
  margin: 0;
  font-weight: 700;
  font-size: min(6vw, 2.5rem);
`;

const Temperature = ({ temp }) => {
  return (
    <StyledTemperature className="Temperature">
      {Math.floor(temp)}&deg;C
    </StyledTemperature>
  );
};

export default Temperature;
