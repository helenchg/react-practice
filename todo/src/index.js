import React from "react";
import ReactDOM from "react-dom";
import Counter from "./counter";
import Bgcolor from "./bgcolor";
import "./index.css";

function App() {
  return (
    <div>
      <h1>TODO REACT APP</h1>
      <span>
        <Bgcolor />
      </span>
      <span>
        <Counter />
      </span>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
