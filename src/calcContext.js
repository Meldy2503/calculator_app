import React, { useState, createContext } from "react";
import Display from "./components/Display/Display";

export const CalcContext = createContext();

export const CalcProvider = ({ children }) => {
  const [display, setDisplay] = useState("");

  const displayButtonText = (e) => {
    setDisplay(display?.concat(e.target.value));
  };

  const handleClrButton = () => {
    setDisplay("");
  };
  const handleDelButton = () => {
    setDisplay(display?.slice(0, -1));
  };

  const parse = (a) => {
    return Function(`'use strict'; return (${a})`)();
  };

  const handleEqualToButton = () => {
    try {
      setDisplay(parse(display).toString());
    } catch (error) {
      setDisplay("Math Error");
    }
  };
  const handlePercentButton = () => {
    setDisplay((display / 100).toString());
  };

  const value = {
    display,
    displayButtonText,
    handleDelButton,
    handleClrButton,
    handleEqualToButton,
    handlePercentButton,
  };
  return <CalcContext.Provider value={value}>{children}</CalcContext.Provider>;
};
