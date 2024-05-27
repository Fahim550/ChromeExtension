import  { useState } from "react";

export default function TicTacToe() {
  const [squares, setSquares] = useState([]);
  const [isXNext, setIsXNext] = useState(true);
  const style = {
    container: "w-screen flex flex-col items-center justify-center",
    title: "justify-center text-slate-100 font-bold text-4xl my-2",
    subtitle: "text-purple-500 font-bold text-4xl my-2",
    board: "flex justify-center",
    row1: "",
    boxes:
      "flex h-32 w-36 bg-gray-700 text-8xl font-bold justify-center items-center text-yellow-400 border-2 border-solid border-gray-800 rounded-lg cursor-pointer",
    button:
      " bg-slate-50 text-xl p-2 rounded-lg my-2 hover:bg-purple-500 hover:text-slate-100",
  };
  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isXNext ? "X" : "O");
  }
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className={style.container}>
      <h1 className={style.title}>Tic Tac Toe</h1>
      <h1 className={style.subtitle}>{status}</h1>
      <div className={style.board}>
        <div className={style.row1}>
          <div className={style.boxes} onClick={() => handleClick(0)}>
            {squares[0]}
          </div>
          <div className={style.boxes} onClick={() => handleClick(1)}>
            {squares[1]}
          </div>
          <div className={style.boxes} onClick={() => handleClick(2)}>
            {squares[2]}
          </div>
        </div>
        <div className={style.row1}>
          <div className={style.boxes} onClick={() => handleClick(3)}>
            {squares[3]}
          </div>
          <div className={style.boxes} onClick={() => handleClick(4)}>
            {squares[4]}
          </div>
          <div className={style.boxes} onClick={() => handleClick(5)}>
            {squares[5]}
          </div>
        </div>
        <div className={style.row1}>
          <div className={style.boxes} onClick={() => handleClick(6)}>
            {squares[6]}
          </div>
          <div className={style.boxes} onClick={() => handleClick(7)}>
            {squares[7]}
          </div>
          <div className={style.boxes} onClick={() => handleClick(8)}>
            {squares[8]}
          </div>
        </div>
      </div>
      <button
        className={style.button}
        onClick={() => handleClick(window.location.reload())}
      >
        Reset
      </button>
    </div>
  );
}
