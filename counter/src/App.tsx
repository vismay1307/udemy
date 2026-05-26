import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - 1, 0));
  };

  const reset = () => {
    setCount(0);
    setInput("");
  };

  const handleSetCount = () => {
    setCount(Number(input));
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Count Is {count}</h1>

      <button
        onClick={increment}
        className="bg-blue-500 m-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Increment
      </button>

      <button
        onClick={decrement}
        className="bg-blue-500 m-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Decrement
      </button>

      <button
        onClick={reset}
        className="bg-blue-500 hover:bg-blue-700 m-5 text-white font-bold py-2 px-4 rounded-full"
      >
        Reset
      </button>

      <div className="mt-5">
        <input
          type="number"
          placeholder="Enter Number You Want To Set"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 w-60 rounded"
        />

        <button
          onClick={handleSetCount}
          className="ml-3 bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Set Count
        </button>
      </div>
    </div>
  );
}

export default App;