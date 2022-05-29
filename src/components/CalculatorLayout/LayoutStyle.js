import styled from "styled-components";
import bgImg from "../../img/bg-img.jpg";

export const Container = styled.div`
  max-width: 120rem;
  overflow: hidden;
  margin: 0 auto;
`;

export const Calculator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.3)
    ),
    url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4rem;
  border-right: 3px solid #efefef;
  box-shadow: 0px 2px 15px #000;
  cursor: pointer;
  width: 30%;
  margin: 0 auto;
  color: #dfd9d9;
  padding: 1.5rem 0;
`;

// export const BookingStyle = styled.div`
//   display: flex;
//   align-items: center;
//   height: 100%;
//   width: 80%;
//   margin: 0 auto;
//   justify-content: space-between;
//   overflow: auto;

//   @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
