/* eslint-disable react/prop-types */
import './style.css';

const Square = ({ value, onClick }) => {
  return (
    <button className='square-boxes' onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
