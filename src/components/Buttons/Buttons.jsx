import React, { useContext } from "react";
import { ButtonContainer, ButtonWrapper, Operator } from "./ButtonStyle";
import { CalcContext } from "../../CalcContext";
import Digits from "../Digits/Digits";

const Buttons = () => {
  const {
    handleDelButton,
    handleClrButton,
    handleEqualToButton,
    handlePercentButton,
  } = useContext(CalcContext);
  return (
    <ButtonContainer>
      <ButtonWrapper>
        <Operator
          type="button"
          bgColor="#0d217a"
          onClick={handleClrButton}
          value="C"
        />
        <Digits co="#e6c649" value="**" />
        <Operator
          type="button"
          col="#e6c649"
          value="%"
          onClick={handlePercentButton}
        />
        <Digits co="#e6c649" value="/" />
      </ButtonWrapper>
      <ButtonWrapper>
        <Digits value="7" />
        <Digits value="8" />
        <Digits value="9" />
        <Digits co="#e6c649" value="*" />
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
        <Operator
          type="button"
          bgColor="#aa0c0c"
          onClick={handleDelButton}
          value="del"
        />

        <Operator
          type="button"
          bgColor="#043038"
          onClick={handleEqualToButton}
          value="="
        />
      </ButtonWrapper>
    </ButtonContainer>
  );
};

export default Buttons;
