import styled from "styled-components";

export const InputContainer = styled.div`
  background-color: ${({ bgColor }) => bgColor || "rgba(0, 0, 0, 0.95)"};
  color: ${({ co }) => co || "#dfd9d9"};
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23%;
  box-shadow: 0.1rem 1.5rem 0.1rem #292828;
  border-radius: 50%;
  border-bottom: 0.3rem solid #333;
  border-left: 0.3rem solid #999;
  border-top: 0.3rem solid #333;
  border-right: 0.3rem solid #999;

  &:hover {
    transform: translateY(0.5rem);
    border-top: 0.3rem solid #fff8dc;
    border-bottom: 0.3rem solid #fff8dc;
  }

  input {
    font-size: 2.5rem;
    font-weight: 700;
    color: inherit;
    width: 100%;
    border-radius: 50%;
    padding: 1.1rem;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
