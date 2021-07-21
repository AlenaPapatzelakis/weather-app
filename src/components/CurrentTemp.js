import "../styles/CurrentTemp.css";

const CurrentTemp = (props) => {
  return <p className="CurrentTemp">{Math.floor(props.temp)}&deg;C</p>;
};

export default CurrentTemp;
