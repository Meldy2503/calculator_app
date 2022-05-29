import styled from "styled-components";

export const ButtonContainer = styled.div`
  padding: 2rem 1rem;
  width: 100%;
`;
export const ButtonWrapper = styled.div`
  /* background-color: green; */
  display: flex;
  justify-content: space-between;
  /* width: 100%; */
  padding: 0 1rem;
`;
export const Button = styled.div`
  background-color: ${({ bgColor }) => bgColor || "rgba(0, 0, 0, 0.95)"};
  display: flex;
  margin-bottom: 2rem;
  padding: 2rem;

  justify-content: center;
  width: 22%;
  /* border-right: 2px solid #efefef; */
  box-shadow: 1px 15px 1px #292828;
  /* box-shadow: 1px 15px 1px rgba(0, 0, 0, 0.5); */
  border-radius: 50%;
  border-bottom: 3px solid #333;
  border-left: 3px solid #999;
  border-top: 3px solid #333;
  border-right: 3px solid #999;
  font-size: 2rem;
  font-weight: 700;
`;
