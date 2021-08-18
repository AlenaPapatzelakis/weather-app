import styled from "styled-components";

const StyledLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 39.8em) {
    align-items: flex-start;
  }
`;

const Title = styled.p`
  font-size: min(5vw, 2rem);
`;

const Button = styled.button`
  margin: 0;
  text-align: center;
  vertical-align: middle;
  font-size: min(4vw, 1rem);
  background: none;
  border: none;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
`;

const Icon = styled.i`
  vertical-align: middle;
  font-size: min(4vw, 1.5rem);
`;

const Location = ({ locationName, showSearch }) => {
  const handleClick = () => {
    showSearch(true);
  };

  return (
    <StyledLocation className="Location">
      <Title className="Location-title">{locationName}</Title>
      <Button className="Location-change" type="button" onClick={handleClick}>
        <Icon className="Location-icon material-icons">place</Icon> Change
        Location
      </Button>
    </StyledLocation>
  );
};

export default Location;
