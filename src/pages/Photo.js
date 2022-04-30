import React, { useContext } from "react";
import { Context } from "../Context";
import Image from "../components/Image";
import { getClass } from "../utils";

function Photos() {
  const { photoArr } = useContext(Context);

  const imgElements = photoArr.map((img, i) => {
    console.log(getClass(i));
    return <Image key={img.id} img={img} className={getClass(i)} />;
  });
  return <main className="photos">{imgElements}</main>;
}

export default Photos;
