import React, { useState, useEffect, useRef } from "react";
// useRef for focus on ui element. in this case, we focus on texbox when refresh.
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  // input event handler. save the input text into the input state
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // button event handler. What to do when button is clicked or form is submitted in this case.
  const handleSubmit = (e) => {
    e.preventDefault();

    // todo: create better id generator
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update the todo"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button edit">Update todo</button>
        </>
      ) : (
        <>
          {" "}
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Add todo</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
