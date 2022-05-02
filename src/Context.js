import React, { useState, useEffect } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [photoArr, setPhotoArr] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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

  const checkCart = (img, newItem) => img.id === newItem.id;

  const addToCart = (newItem) => {
    setCartItems((prevState) => [...prevState, newItem]);
  };

  const removeFromCart = (img) => {
    setCartItems((prevState) => {
      return prevState.filter((item) => item.id !== img.id);
    });
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  return (
    <Context.Provider
      value={{
        photoArr,
        toggleFav,
        cartItems,
        addToCart,
        checkCart,
        removeFromCart,
        emptyCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
