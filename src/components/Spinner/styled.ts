import styled from "styled-components";

export const SpinnerElement = styled.div`
  border: 16px solid #ffe6c0;
  border-top: 16px #ff9114 solid;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
