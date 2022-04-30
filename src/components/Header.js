import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>

      <Link to="/cart">
        <img
          src="./images/cart-shopping-solid.svg"
          alt="go to shopping cart"
          className="cart-img filter-white"
        />
      </Link>
    </header>
  );
}

export default Header;
