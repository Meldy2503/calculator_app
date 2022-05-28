import React from "react";
import Buttons from "../Buttons/Buttons";
import Display from "../Display/Display";
import { Textfit } from "react-textfit";

const CalculatorLayout = () => {
  return (
    <Wrapper>
      <Textfit>
        <Display />
      </Textfit>
      <Buttons />
    </Wrapper>
  );
};

export default CalculatorLayout;
