import styled from "styled-components";

const StyledAdvancedWeatherInfoTile = styled.div`
  display: flex;
  align-self: stretch;
`;

const Icon = styled.i`
  margin: 0 1rem 0 0;
  font-size: min(5vw, 3rem);
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  margin: 0;
  font-size: min(2.5vw, 1.5rem);
`;

const Data = styled.p`
  font-size: min(4vw, 2rem);
  font-weight: 500;
`;

const AdvancedWeatherInfoTile = ({ icon, title, data, unit }) => {
  return (
    <StyledAdvancedWeatherInfoTile className="AdvancedWeatherInfoTile">
      <Icon className="AdvancedWeatherInfoTile-icon material-icons-outlined">
        {icon}
      </Icon>
      <StyledContainer className="AdvancedWeatherInfoTile-container">
        <Title className="AdvancedWeatherInfoTile-title">{title}</Title>
        <Data className="AdvancedWeatherInfoTile-data">{`${data} ${unit}`}</Data>
      </StyledContainer>
    </StyledAdvancedWeatherInfoTile>
  );
};

export default AdvancedWeatherInfoTile;
