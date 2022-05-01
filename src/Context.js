import React, { useState, useEffect } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [photoArr, setPhotoArr] = useState([]);
  const [CartItems, setCartItems] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPhotoArr(data));
  }, []);

  const toggleFav = (id) => {
    setPhotoArr((oldState) => {
      return oldState.map((img) => {
        return img.id === id ? { ...img, isFavorite: !img.isFavorite } : img;
      });
    });
  };

  const addToCart = (img) => {
    const id = img.id;
    setCartItems((prevState) => [...prevState, img]);
  };
  console.log(CartItems);

  return (
    <Context.Provider value={{ photoArr, toggleFav, CartItems, addToCart }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
