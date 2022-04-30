import React from "react";

const Image = ({ className, img }) => {
  console.log(className);
  return (
    <div className={`${className} image-container`}>
      <img src={img.url} alt="art" className={"image-grid"} />
    </div>
  );
};

export default Image;
