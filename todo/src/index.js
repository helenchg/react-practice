import React from "react";
import ReactDOM from "react-dom";
import Counter from "./counter";
import ThemeToggle from "./themetoggle";
import "./index.css";

function App() {
  return (
    <div>
      <h1>TODO REACT APP</h1>
      <span>
        <ThemeToggle />
      </span>
      <span>
        <Counter />
      </span>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
