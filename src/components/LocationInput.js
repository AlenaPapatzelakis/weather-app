import styled from "styled-components";

import { useState } from "react";

import { capitalizeAndTrimInput } from "../utils/WeatherAppUtils";

const StyledLocationInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const Label = styled.label`
  font-size: min(8vw, 5rem);
`;

const StyledContainer = styled.div`
  display: flex;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  border-radius: 1rem;
  padding: 0.5em;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: min(5vw, 2rem);
`;

const Button = styled.button`
  border: none;
  border-radius: 1rem;
  background: none;
`;

const Icon = styled.i`
  color: #fff;
  font-size: min(8vw, 4rem);

  &:hover {
    color: #e7e7e7;
  }
`;

const LocationInput = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(capitalizeAndTrimInput(location));
  };

  return (
    <StyledLocationInput className="LocationInput">
      <form id="search-form" role="search" onSubmit={handleSubmit}>
        <Label htmlFor="search" className="LocationInput-label">
          Search for City:
        </Label>
        <StyledContainer className="LocationInput-inputContainer">
          <Input
            id="search-input"
            type="search"
            name="search"
            value={location}
            onChange={handleChange}
            className="LocationInput-inputField"
            placeholder="Search..."
            maxLength="30"
            required
            /*** Start with at least one letter
             * followed by either none or one space or hyphen
             * or unlimited letters.
             * End with at least one letter. */
            pattern="(^[A-Za-z]+)(( |-)?|[A-Za-z]*)([A-Za-z]+$)"
          />
          <Button className="LocationInput-searchButton">
            <Icon className="LocationInput-searchIcon material-icons-outlined">
              search
            </Icon>
          </Button>
        </StyledContainer>
      </form>
    </StyledLocationInput>
  );
};

export default LocationInput;
