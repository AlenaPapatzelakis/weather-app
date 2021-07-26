import "../styles/Location.css";

const Location = (props) => {
  return (
    <div className="Location-container">
      <p className="Location-title">{props.locationName}</p>
      <p className="Location-change">
        <span className="Location-icon material-icons">place</span> Change
        Location
      </p>
    </div>
  );
};

export default Location;
