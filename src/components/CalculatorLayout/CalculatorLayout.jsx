import React from "react";
import Buttons from "../Buttons/Buttons";
import Display from "../Display/Display";
// import { Textfit } from "react-textfit";
import { Calculator, Container } from "./LayoutStyle";
import { calcContext } from "../../calcContext";

  

const CalculatorLayout = () => {
  const {display} = useContext(calcContext);

  return (
    <Container>
      <Calculator>
        {/* <Textfit> */}
        <Display />
        {/* </Textfit> */}
        <Buttons />
      </Calculator>
    </Container>
  );
};

export default CalculatorLayout;
