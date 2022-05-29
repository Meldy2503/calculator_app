import { useState, createContext } from "react";

export const calcContext = createContext();

export const calcProvider = (props) => {
    const [display, setDisplay] = useState('0');

    const displayButtonText = (e) => {
        setDisplay(e.target.value);
    }
  const value = {display, displayButtonText};
  return (
    <calcContext.Provider value={value}>{props.children}</calcContext.Provider>
  );
};
