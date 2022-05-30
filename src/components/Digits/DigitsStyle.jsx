import styled from "styled-components";

export const InputContainer = styled.div`
  background-color: ${({ bgColor }) => bgColor || "rgba(0, 0, 0, 0.95)"};
  display: flex;
  color: ${({ co }) => co || "#dfd9d9"};
  margin-bottom: 2rem;
  justify-content: center;
  width: 22%;
  box-shadow: 1px 15px 1px #292828;
  border-radius: 50%;
  border-bottom: 3px solid #333;
  border-left: 3px solid #999;
  border-top: 3px solid #333;
  border-right: 3px solid #999;

  &:hover {
    transform: translateY(5px);
    border-top: 3px solid #fff8dc;
    border-bottom: 3px solid #fff8dc;
  }

  input {
    font-size: 2.5rem;
    font-weight: 700;
    color: inherit;
    width: 100%;
    border-radius: 50%;
    padding: 2rem;
    background-color: transparent;
    border: none;
  }
`;
