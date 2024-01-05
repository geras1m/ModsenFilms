import styled from "styled-components";
import { Color } from "@components/App/styled";

export const Button = styled.button`
  font-size: 22px;
  font-weight: bold;
  padding: 14px 35px;
  border-radius: 10px;
  border: none;
  color: ${Color.WHITE};
  background-color: ${Color.ORANGE};
  margin-top: 37px;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.2s ease;

  &:hover {
    opacity: 1;
  }

  &:disabled {
    cursor: auto;
    background-color: ${({ disabled }) => (disabled ? "grey" : Color.ORANGE)};
  }
`;
