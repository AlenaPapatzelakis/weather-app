import "../styles/Location.css";

const Location = ({ locationName, showSearch }) => {
  const handleClick = () => {
    showSearch(true);
  };

  return (
    <div className="Location">
      <p className="Location-title">{locationName}</p>
      <button className="Location-change" type="button" onClick={handleClick}>
        <i className="Location-icon material-icons">place</i> Change Location
      </button>
    </div>
  );
};

export default Location;
