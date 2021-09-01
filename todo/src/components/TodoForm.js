import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  // input event handler. save the input text into the input state
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // button event handler. What to do when button is clicked or form is submitted in this case.
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
        />
        <button className="todo-button">Add todo</button>
      </form>
    </div>
  );
}

export default TodoForm;
