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
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>X</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>-</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>+</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button>0</Button>
        <Button>.</Button>
        <Button className="red" bgColor="red">
          del
        </Button>
        <Button>=</Button>
      </ButtonWrapper>
    </ButtonContainer>
  );
};

export default Buttons;
