import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Cart from "../../react-hooks/src/components/cart";
import Greeter from "./greeter";

function Shopping() {
  return (
    <div className="mainCart">
      <h1 className="shoppingCartTitle">Shopping Cart</h1>
      <h2>
        <Greeter name="Sue" />
      </h2>
      <Cart />
      <div></div>
    </div>
  );
}

ReactDOM.render(<Shopping />, document.querySelector("#root"));
