import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";

const Image = ({ className, img }) => {
  const [hovered, setIsHovered] = useState(false);
  const { toggleFav, addToCart, cartItems, removeFromCart } =
    useContext(Context);

  const inCart = cartItems.some((image) => image.id === img.id);

  const plusIcon = inCart ? (
    <img
      src="./images/cart-shopping-solid.svg"
      alt="add to cart"
      className="cart filter-red"
      onClick={() => removeFromCart(img)}
    />
  ) : (
    hovered && (
      <img
        src="./images/plus-solid.svg"
        alt="add to cart"
        className="cart filter-red"
        onClick={() => addToCart(img)}
      />
    )
  );

  const heartIcon = img.isFavorite ? (
    <img
      src="./images/heart-solid.svg"
      alt="remove from to favorites"
      className="favorite filter-red"
      onClick={() => toggleFav(img.id)}
    />
  ) : (
    hovered && (
      <img
        src="./images/heart-regular.svg"
        alt="remove from to favorites"
        className="favorite filter-red"
        onClick={() => toggleFav(img.id)}
      />
    )
  );

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img.url} alt="art" className={"image-grid"} />
      {heartIcon}
      {plusIcon}
    </div>
  );
};

//  To specify prop types of an objects values use PropTypes.shape
Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
