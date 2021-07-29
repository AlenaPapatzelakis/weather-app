import "../styles/CurrentTemp.css";

const CurrentTemp = ({ temp }) => {
  return <p className="CurrentTemp">{Math.floor(temp)}&deg;C</p>;
};

export default CurrentTemp;
