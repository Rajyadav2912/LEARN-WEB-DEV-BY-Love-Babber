import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setcounter] = useState(0);
  function decreaseHandler() {
    setcounter(counter - 1);
  }

  function increaseHandler() {
    setcounter(counter + 1);
  }
  function resetHandler() {
    setcounter(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-[#344151] gap-10 ">
      <div className="text-[#0398d4] font-medium text-[20px] ">
        Increment & Decrement
      </div>

      <div className="bg-white flex flex-row text-[25px] text-[#344151] rounded-sm gap-12 py-3 px-5">
        <button
          onClick={decreaseHandler}
          className="border-r-2 text-4xl font-bold  border-[#bfbfbf] pr-5"
        >
          -
        </button>
        <div className="font-bold">{counter}</div>
        <button
          onClick={increaseHandler}
          className="border-l-2 text-4xl font-bold  border-[#bfbfbf] pl-5"
        >
          +
        </button>
      </div>
      <button
        onClick={resetHandler}
        className="bg-[#0389d4] text-white py-2 px-5 rounded-sm text-lg"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
