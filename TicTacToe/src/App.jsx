import { useState } from "react";

function App() {
  return (
    <div>
      <GameBox />
    </div>
  );
}

function GameBox() {
  const array = ["", "", "", "o", "x", "o", "o", "x", "o"];
  const [input, setInput] = useState();
  console.log(array);

  function handleInput(id) {
    // replace exsiting array with the id as index and input being the letter (needs to use memo as the function re-renders 9 times)
    console.log(input);
  }

  return (
    <div className="flex justify-center w-200 mt-25">
      <div className="grid grid-cols-3 grid-rows-3">
        {array.map((el, i) => (
          <Square
            handleInput={handleInput}
            value={input}
            setInput={setInput}
            array={array}
            key={i}
            id={i}
          />
        ))}
      </div>
    </div>
  );
}

function Square({ input, setInput, id, handleInput }) {
  return (
    <input
      onSubmit={handleInput(id)}
      value={input}
      onChange={(e) => setInput(e.target.value)}
      maxLength={1}
      className=" border border-black grid justify-items-center h-20 w-20 text-4xl uppercase"
    />
  );
}

export default App;
