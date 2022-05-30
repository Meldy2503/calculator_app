import React, { useContext } from "react";
import { ButtonContainer, ButtonWrapper } from "./ButtonStyle";
import { CalcContext } from "../../CalcContext";
import Digits from "../Digits/Digits";

const Buttons = () => {
  const { displayButtonText } = useContext(CalcContext);
  return (
    <ButtonContainer>
      <ButtonWrapper>
        <Digits bgColor="#0d217a" value="C" />
        <Digits co="#e6c649" value="+/-" />
        <Digits co="#e6c649" value="%" />
        <Digits co="#e6c649" value="/" />
      </ButtonWrapper>
      <ButtonWrapper>
        <Digits value="7" />
        <Digits value="8" />
        <Digits value="9" />
        <Digits co="#e6c649" value="X" />
      </ButtonWrapper>
      <ButtonWrapper>
        <Digits value="4" />
        <Digits value="5" />
        <Digits value="6" />
        <Digits co="#e6c649" value="-" />
      </ButtonWrapper>
      <ButtonWrapper>
        <Digits value="1" />
        <Digits value="2" />
        <Digits value="3" />
        <Digits co="#e6c649" value="+" />
      </ButtonWrapper>
      <ButtonWrapper>
        <Digits value="0" />
        <Digits value="." />
        <Digits bgColor="#aa0c0c" value="del" />
        <Digits bgColor="#043038" value="=" />
      </ButtonWrapper>
    </ButtonContainer>
  );
};

export default Buttons;
