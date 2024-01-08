import styled from "styled-components";
import { baseTheme } from "@components/App/styled";

export const Button = styled.button`
  font-size: 22px;
  font-weight: bold;
  padding: 14px 35px;
  border-radius: 10px;
  border: none;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.orange};
  margin-top: 37px;
  cursor: pointer;
  opacity: 0.8;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    opacity: 1;
  }

  &:disabled {
    cursor: auto;
    background-color: ${({ disabled }) => (disabled ? "grey" : baseTheme.orange)};
  }

  @media (max-width: 400px) {
    margin-top: 10px;
    font-size: 16px;
    width: 100%;
    padding: 8px 35px;
  }
`;
