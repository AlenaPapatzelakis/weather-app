import "../styles/City.css";

const City = (props) => {
  return (
    <div className="City">
      <h1>{props.cityName}</h1>
    </div>
  );
};

export default City;
