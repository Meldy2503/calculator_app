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
  border-right: 3px solid #efefef;
  border-bottom: 3px solid #efefef;
  box-shadow: 0px 2px 15px #000;
  cursor: pointer;
  width: 35%;
  margin: 0 auto;
  color: #dfd9d9;
  padding: 1.5rem 0;

  @media screen and (max-width: 960px) {
    width: 45%;
  }
  @media screen and (max-width: 768px) {
    width: 60%;
  }
  @media screen and (max-width: 600px) {
    width: 80%;
  }
  @media screen and (max-width: 400px) {
    width: 96%;
  }
`;
