import styled from "styled-components";

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
  background-color: black;
  width: 30%;
  margin: 0 auto;
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
