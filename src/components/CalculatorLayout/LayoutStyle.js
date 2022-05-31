import styled from "styled-components";
import bgImg from "../../img/bg-img.jpg";

export const Container = styled.div`
  max-width: 120rem;
  overflow: hidden;
  width: 100%;
  height: 100vh;
`;

export const Calculator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(
      105deg,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.3)
    ),
    url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4rem;
  border-right: 4px solid #dfd9d9;
  border-bottom: 8px solid #dfd9d9;
  border-top: 7px solid #dfd9d9;
  box-shadow: 0px 2px 15px #000;
  cursor: pointer;
  margin: 1rem auto;
  color: #dfd9d9;
  padding: 0.5rem;

  .screen {
    margin: 4rem 1.5rem 0.5rem 1.5rem;
    background-color: rgba(0, 0, 0, 0.95);
    box-shadow: 2px 12px 1px #000;
    border-radius: 5rem;
    border-bottom: 3px solid #333;
    border-left: 3px solid #999;
    border-top: 3px solid #333;
    border-right: 3px solid #999;
    height: 7rem;
    padding: 0 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: right;
    align-items: center;

    &:hover {
      transform: scale(1.04);
      border-top: 3px solid #c7c6c3;
      border-bottom: 3px solid #c7c6c3;
    }
  }

  .input {
    text-align: right;
    font-size: 2.9rem;
    width: 100%;
    color: #efefef;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-weight: 500;

    &::placeholder {
      color: #efefef;
    }
  }
`;
