import React, { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems, emptyCart } = useContext(Context);
  const [buttonTxt, setButtonTxt] = useState("Place Order");
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const total = cartItems.length * 5.99;
  const totalDisplay = total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const placeOrder = () => {
    if (cartItems.length > 0) {
      setButtonTxt("Ordering. . .");
      setTimeout(() => {
        emptyCart();
        setButtonTxt("Place Order");
        console.log("order place");
      }, 3000);
    }
  };

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalDisplay}</p>
      <div className="order-button">
        <button onClick={placeOrder}>{buttonTxt}</button>
      </div>
    </main>
  );
}

export default Cart;
