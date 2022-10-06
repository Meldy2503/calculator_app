import React, { useContext } from "react";
import Buttons from "../Buttons/Buttons";
// import { Textfit } from "react-textfit";
import { Calculator, Container, Screen } from "./LayoutStyle";
import { CalcContext } from "../../CalcContext";

const CalculatorLayout = () => {
  const { display } = useContext(CalcContext);
  return (
    <Container>
      <Calculator>
        {/* <Textfit className="screen" mode="single" max={20}> */}
        <Screen>
          <input
            type="text"
            value={display}
            placeholder="0"
            className="input"
          />
        </Screen>
        {/* </Textfit> */}
        <Buttons />
      </Calculator>
    </Container>
  );
};

export default CalculatorLayout;
