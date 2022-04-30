import React, { useState, useEffect } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [photoArr, setPhotoArr] = useState([]);

  const toggleFav = (id) => {
    setPhotoArr((oldState) => {
      return oldState.map((img) => {
        return img.id === id ? { ...img, isFavorite: !img.isFavorite } : img;
      });
    });
  };
  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPhotoArr(data));
  }, []);

  return (
    <Context.Provider value={{ photoArr, toggleFav }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
