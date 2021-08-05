import "../styles/LocationInput.css";

import { useState } from "react";

import { capitalizeAndTrimInput } from "../utils/WeatherAppUtils";

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
    <div className="LocationInput">
      <form id="search-form" role="search" onSubmit={handleSubmit}>
        <label htmlFor="search" className="LocationInput-label">
          Search for City:
        </label>
        <div className="LocationInput-inputContainer">
          <input
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
          <button className="LocationInput-searchButton">
            <i className="LocationInput-searchIcon material-icons-outlined">
              search
            </i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LocationInput;
