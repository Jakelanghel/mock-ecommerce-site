import { getAllByAltText } from "@testing-library/react";
import React, { useState, useEffect } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [photoArr, setPhotoArr] = useState([]);
  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPhotoArr(data));
  }, []);

  return <Context.Provider value={{ photoArr }}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
