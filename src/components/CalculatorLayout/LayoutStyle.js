import styled from "styled-components";
import bgImg from "../../img/bg-img.jpg";

export const Container = styled.div`
  /* overflow: hidden; */
  width: 100%;
  height: 100vh;
`;

export const Calculator = styled.div`
  width: 38rem;
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
  border-right: 0.4rem solid #dfd9d9;
  border-bottom: 0.8rem solid #dfd9d9;
  border-top: 0.7rem solid #dfd9d9;
  box-shadow: 0 0.2rem 1.5rem #000;
  cursor: pointer;
  margin: 2rem auto;
  color: #dfd9d9;
  padding: 0.5rem;

  @media only screen and (max-width: 420px) {
    width: 33rem;
  }
`;
export const Screen = styled.div`
  margin: 2.5rem 1rem 0 1rem;
  background-color: rgba(0, 0, 0, 0.95);
  box-shadow: 0.2rem 1.2rem 0.1rem #000;
  border-radius: 1rem;
  border-bottom: 0.3rem solid #333;
  border-left: 0.3rem solid #999;
  border-top: 0.3rem solid #333;
  border-right: 0.3rem solid #999;
  /* max-height: 17rem auto; */
  /* height: 10rem;
    width: 35rem; */
  height: 7rem;
  padding: 1rem;
  /* margin-bottom: 1rem; */
  display: flex;
  word-wrap: break-word;
  word-break: break-all;
  justify-content: right;
  align-items: center;

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
