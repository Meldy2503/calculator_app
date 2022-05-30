import React, { useState, createContext } from "react";

export const CalcContext = createContext();

export const CalcProvider = ({ children }) => {
  const [display, setDisplay] = useState(0);

  const displayButtonText = (e) => {
    setDisplay(e.target.value);
  };

  // const handleDelButton =()
  const value = { display, displayButtonText };
  return <CalcContext.Provider value={value}>{children}</CalcContext.Provider>;
};
