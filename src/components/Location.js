import "../styles/Location.css";

const Location = ({ locationName }) => {
  return (
    <div className="Location">
      <p className="Location-title">{locationName}</p>
      <p className="Location-change">
        <i className="Location-icon material-icons">place</i> Change Location
      </p>
    </div>
  );
};

export default Location;
