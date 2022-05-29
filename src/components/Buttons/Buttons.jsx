import React from "react";
import { ButtonContainer, ButtonWrapper, Button } from "./ButtonStyle";

const Buttons = () => {
  return (
    <ButtonContainer>
      <ButtonWrapper>
        <Button bgColor="#0d217a">C</Button>
        <Button co="#e6c649">+/-</Button>
        <Button co="#e6c649">%</Button>
        <Button co="#e6c649">/</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button co="#e6c649">X</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button co="#e6c649">-</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button co="#e6c649">+</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button>0</Button>
        <Button>.</Button>
        <Button bgColor="#aa0c0c">del</Button>
        <Button bgColor="#043038">=</Button>
      </ButtonWrapper>
    </ButtonContainer>
  );
};

export default Buttons;
