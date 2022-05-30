import React, { useContext } from "react";
import { InputContainer } from "./DigitsStyle";
import { CalcContext } from "../../CalcContext";

const Digits = ({ value, bgColor, co }) => {
  const { displayButtonText } = useContext(CalcContext);
  return (
    <InputContainer co={co}>
      <input
        type="button"
        value={value}
        onClick={displayButtonText}
        // bgColor={bgColor}
      />
    </InputContainer>
  );
};

export default Digits;
