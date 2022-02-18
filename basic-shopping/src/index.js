import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Cart from "./cart";
import Greeter from "./greeter";

const items = [
  { id: 1, name: "Taco Seasoning", price: 2.25, qty: 2 },
  { id: 2, name: "Pinto Beans", price: 1.99, qty: 3 },
  { id: 3, name: "Sour Cream", price: 3.5, qty: 1 },
];

function Shopping() {
  return (
    <div className="mainCart">
      <h1 className="shoppingCartTitle">Shopping Cart</h1>
      <h2>
        <Greeter name="Sue" />
      </h2>
      <div>
        <Cart items={items} />
      </div>
    </div>
  );
}

ReactDOM.render(<Shopping />, document.querySelector("#root"));
