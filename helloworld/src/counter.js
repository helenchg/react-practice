import React, { useState } from "react";

function Counter({ step = 1 }) {
  const [count, setCount] = useState(0);
  const [isHappy, setIsHappy] = useState(true);
  const toggleIsHappy = () => setIsHappy(!isHappy);

  const styles = { color: isHappy ? "green" : "red" };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + step)}>+{step}</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <h3 className="moodToggler" style={styles} onClick={toggleIsHappy}>
        {" "}
        {isHappy ? ":)" : ":("}
      </h3>
    </div>
  );
}
export default Counter;
