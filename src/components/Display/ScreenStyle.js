import styled from "styled-components";

export const Screen = styled.div`
  padding: 4rem 2rem 0.5rem 2rem;

  h2 {
    background-color: rgba(0, 0, 0, 0.95);
    box-shadow: 2px 12px 1px #000;
    border-radius: 5rem;
    border-bottom: 3px solid #333;
    border-left: 3px solid #999;
    border-top: 3px solid #333;
    border-right: 3px solid #999;
    font-size: 2.5rem;
    padding: 2rem 1rem;
    text-align: right;
    margin-bottom: 1rem;

    &:hover {
      transform: scale(1.04);
      border-top: 3px solid #c7c6c3;
      border-bottom: 3px solid #c7c6c3;
    }
  }
`;
