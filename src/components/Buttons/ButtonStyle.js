import styled from "styled-components";

export const ButtonContainer = styled.div`
  padding: 1.5rem 1rem;
  width: 100%;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* padding: 0 1rem; */
  transition: 2s all;
`;
export const Operator = styled.input`
  background-color: ${({ bgColor }) => bgColor || "rgba(0, 0, 0, 0.95)"};
  display: flex;
  color: ${({ col }) => col || "#dfd9d9"};
  margin-bottom: 2rem;
  justify-content: center;
  align-items: center;
  width: 20%;
  box-shadow: 0.1rem 1.5rem 0.1rem #292828;
  border-radius: 50%;
  border-bottom: 0.3rem solid #333;
  border-left: 0.3rem solid #999;
  border-top: 0.3rem solid #333;
  border-right: 0.3rem solid #999;
  font-size: 2.5rem;
  font-weight: 700;
  padding: 1.5rem;
  cursor: pointer;

  &:hover {
    transform: translateY(0.5rem);
    border-top: 0.3rem solid #fff8dc;
    border-bottom: 0.3rem solid #fff8dc;
  }
`;
