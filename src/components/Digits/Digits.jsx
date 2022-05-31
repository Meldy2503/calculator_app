import React, { useContext } from "react";
import { InputContainer } from "./DigitsStyle";
import { CalcContext } from "../../CalcContext";

const Digits = ({ name, value, co }) => {
  const { displayButtonText } = useContext(CalcContext);
  return (
    <InputContainer co={co}>
      <input
        type="button"
        value={value}
        name={name}
        onChange={displayButtonText}
        onClick={displayButtonText}
      />
    </InputContainer>
  );
};

export default Digits;
