import './style.css';
import Board from './Board';
import { useEffect, useState } from 'react';

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (!getWinner(squares) && squares.every((square) => square !== '')) {
      setStatus(`This is a draw! Restart the game`);
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}. Play new Game`);
    } else {
      setStatus(`Next player is ${xIsNext ? 'X' : 'O'}`);
    }
  }, [squares, xIsNext]);

  const handleClick = (index) => {
    const squaresCopy = [...squares];
    if (squaresCopy[index] !== '' || getWinner(squaresCopy)) {
      return;
    }
    squaresCopy[index] = xIsNext ? 'X' : 'O';
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  };

  const handleRestart = () => {
    setStatus('');
    setXIsNext(true);
    setSquares(Array(9).fill(''));
  };

  console.log(squares);

  return (
    <div className='ticTacToe-container'>
      <h3>Play Tic Tac Toe game</h3>
      <Board squares={squares} onClick={handleClick} />
      <div className='game-info'>
        <h1>{status}</h1>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
}
function getWinner(squares) {
  const winningPatters = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningPatters.length; i++) {
    const [a, b, c] = winningPatters[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
