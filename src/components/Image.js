import React, { useState, useContext } from "react";
import { Context } from "../Context";

const Image = ({ className, img }) => {
  const [hovered, setIsHovered] = useState(false);
  const { toggleFav } = useContext(Context);

  //   const heartIcon = hovered && (
  //     <img
  //       src="./images/heart-regular.svg"
  //       alt="remove from to favorites"
  //       className="favorite filter-red"
  //       onClick={() => toggleFav(img.id)}
  //     />
  //   );

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

  const plusIcon = hovered && (
    <img
      src="./images/plus-solid.svg"
      alt="add to cart"
      className="cart filter-red"
    />
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

export default Image;
