import styled from "styled-components";

export const ButtonContainer = styled.div`
  padding: 2rem 1rem;
  width: 100%;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  transition: 2s all;
`;
export const Operator = styled.input`
  background-color: ${({ bgColor }) => bgColor || "rgba(0, 0, 0, 0.95)"};
  display: flex;
  color: ${({ col }) => col || "#dfd9d9"};
  margin-bottom: 2rem;
  justify-content: center;
  align-items: center;
  width: 22%;
  box-shadow: 1px 15px 1px #292828;
  border-radius: 50%;
  border-bottom: 3px solid #333;
  border-left: 3px solid #999;
  border-top: 3px solid #333;
  border-right: 3px solid #999;
  font-size: 2.5rem;
  font-weight: 700;
  padding: 2rem;
  cursor: pointer;

  &:hover {
    transform: translateY(5px);
    border-top: 3px solid #fff8dc;
    border-bottom: 3px solid #fff8dc;
  }
`;
