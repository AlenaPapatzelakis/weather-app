import "../styles/CurrentTemp.css";

const CurrentTemp = (props) => {
  return (
    <div className="CurrentTemp">
      <span>{Math.floor(props.temp)}&deg;C</span>
    </div>
  );
};

export default CurrentTemp;
