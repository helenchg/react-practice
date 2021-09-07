import React, { useState, useEffect, useRef } from "react";
import {
  StyledTodoForm,
  StyledTodoButton,
  StyledInput,
} from "../Styled/StyledTodoForm";
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
    <StyledTodoForm onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <StyledInput
            edit
            type="text"
            placeholder="Update the todo"
            value={input}
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <StyledTodoButton edit>Update todo</StyledTodoButton>
        </>
      ) : (
        <>
          {" "}
          <StyledInput
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <StyledTodoButton>Add todo</StyledTodoButton>
        </>
      )}
    </StyledTodoForm>
  );
}

export default TodoForm;
