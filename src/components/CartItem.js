import React, { useContext, useState } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";

function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);
  const [hovered, setHovered] = useState(false);

  const deleteIcon = hovered ? "trash-can-solid.svg" : "trash-can-regular.svg";
  return (
    <div className="cart-item">
      <img src={item.url} alt="cart item" width="130px" />
      <p>$5.99</p>
      <img
        src={`./images/${deleteIcon}`}
        alt="delete cart item"
        className="trash-icon filter-red"
        onClick={() => removeFromCart(item)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
