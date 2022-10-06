import React, { useState, createContext } from "react";

export const CalcContext = createContext();

export const CalcProvider = ({ children }) => {
  const [display, setDisplay] = useState("");

  const displayButtonText = (e) => {
    setDisplay(display.concat(e.target?.name));
  };

  const handleClrButton = () => {
    setDisplay("");
  };
  const handleDelButton = () => {
    setDisplay(display?.slice(0, -1));
  };
  const handleSqrtButton = (e) => {
    setDisplay(Math.sqrt(display));
  };

  // const parse = (a) => {
  //   return Function(`'use strict'; return (${a})`)();
  // };
  // const parse = (a) => {
  //   return Function(`return (${a})`)();
  // };

  // const handleEqualToButton = () => {
  //   try {
  //     setDisplay(parse(display).toString());
  //   } catch (error) {
  //     setDisplay("Math Error");
  //   }
  // };
  const handleEqualToButton = () => {
    try {
      setDisplay(eval(display).toString());
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
    handleSqrtButton,
  };
  return <CalcContext.Provider value={value}>{children}</CalcContext.Provider>;
};
