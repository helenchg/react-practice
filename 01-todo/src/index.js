import React from "react";
import ReactDOM from "react-dom";
import ThemeToggle from "./components/theme/themetoggle";
import { TodoList } from "./components/TodoList";
import "./Styled/index.css";

function App() {
  return (
    <div>
      <h1>TODO REACT APP</h1>
      <span>
        <ThemeToggle />
        <TodoList />
      </span>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
