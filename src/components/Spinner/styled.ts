import styled from "styled-components";

export const SpinnerElement = styled.div`
  border: 16px solid #ffe6c0;
  border-top: 16px #ff9114 solid;
  border-radius: 50%;
  height: 100px;
  width: 100px;
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

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
