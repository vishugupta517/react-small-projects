/* eslint-disable react/prop-types */
import Square from './Square';
import './style.css';

const Board = ({ squares, onClick }) => {
  return (
    <div className='board-container'>
      {squares.map((value, index) => {
        return (
          <Square key={index} value={value} onClick={() => onClick(index)} />
        );
      })}
    </div>
  );
};

export default Board;
