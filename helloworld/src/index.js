import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import Counter from "./counter";

//function with pascalcase is a React component.
function Custom() {
  return <span>foobarlalala</span>;
}

function HelloWorld() {
  const name = "Dave";

  //   return React.createElement(
  //     "div",
  //     null,
  //     React.createElement("h1", null, "Hello"),
  //     "no element ",
  //     name + " ",
  //     React.createElement("span", null, "hello world"),
  //     React.createElement(Custom)
  //   );
  return (
    <>
      <div className="dark">
        <h1>Hello</h1>hello world
        <h2>From Branch2</h2>
        <h3>From branch3</h3>
        <h3>From branch 5</h3>
        <h2>ORIGIN/BRANCH2</h2>
      </div>
      <div>
        <span>
          {name} <Custom />
        </span>
        <span>
          <Counter step={5} />
        </span>
      </div>
    </>
  );
}

ReactDOM.render(<HelloWorld />, document.querySelector("#root"));
