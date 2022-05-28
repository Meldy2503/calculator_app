import React from "react";
import { ButtonContainer, ButtonWrapper, Button } from "./ButtonStyle";

const Buttons = () => {
  // const btn = [
  //   ["C", "+/-", "%", "/"],
  //   [7, 8, 9, "X"],
  //   [4, 5, 6, "-"],
  //   [1, 2, 3, "+"],
  //   [0, ".", del, "="],
  // ];

  return (
    <ButtonContainer>
      <ButtonWrapper>
        <Button>C</Button>
        <Button>+/-</Button>
        <Button>%</Button>
        <Button>/</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button>C</Button>
        <Button>+/-</Button>
        <Button>%</Button>
        <Button>/</Button>
      </ButtonWrapper>
    </ButtonContainer>
  );
};

export default Buttons;
