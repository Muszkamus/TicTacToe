import { useState } from "react";

function App() {
  return (
    <div>
      <Box />
    </div>
  );
}

function Box() {
  const [board, setBoard] = useState(Array(9).fill(""));

  const [count, setCount] = useState(0);

  function handleClick(id) {
    let letter = count % 2 === 0 ? "X" : "O";

    setBoard((prev) => {
      // Very useful for swapping the content within the state

      const copy = [...prev];
      if (copy[id] === "") {
        setCount(count + 1);
        copy[id] = letter;

        return copy;
      }

      return prev;
    });
  }
  return (
    <div className="flex justify-center mt-20">
      <div className="grid grid-cols-3 grid-rows-3">
        {board.map((el, index) => (
          <Square
            id={index}
            value={board[index]}
            key={index}
            handleClick={handleClick}
            board={board}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

function Square({ handleClick, board, id }) {
  return (
    <div className="border text-4xl w-20 h-20 grid justify-items-stretch">
      <button onClick={() => handleClick(id)}>{board[id]}</button>
    </div>
  );
}
