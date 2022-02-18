import React, { useRef } from "react";
import "./App.css";
import { Toggle } from "./Toggle.js";

function App() {
  const buttonRef = useRef(null);

  return (
    <div className="App">
      <h1>Hooks</h1>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        PARENT BUTTON
      </button>
      <Toggle ref={buttonRef} />
    </div>
  );
}

export default App;
