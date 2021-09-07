import React from "react";
import ReactDOM from "react-dom";
import ThemeToggle from "./components/theme/themetoggle";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div>
      <h1>TODO REACT APP</h1>
      <ThemeToggle />
      <TodoList />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
