import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Header() {
  const { cartItems } = useContext(Context);

  return (
    <header>
      <Link to="/">
        <h2 className="logo">Pic Some</h2>
      </Link>

      <Link to="/cart">
        <img
          src="./images/cart-shopping-solid.svg"
          alt="go to shopping cart"
          className="cart-img filter-white"
        />
      </Link>
      {cartItems.length > 0 && (
        <span className="cart-count">{cartItems.length}</span>
      )}
    </header>
  );
}

export default Header;
