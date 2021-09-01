import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button
        id="decrement"
        className="buttons"
        onClick={() => setCount(count - 1)}
      >
        +1
      </button>
      <button
        id="increment"
        className="buttons"
        onClick={() => setCount(count + 1)}
      >
        -1
      </button>
    </div>
  );
}
