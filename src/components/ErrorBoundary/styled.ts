import styled from "styled-components";
import { baseTheme } from "@components/App/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  color: ${baseTheme.white};
  background-color: ${baseTheme.orange};
  cursor: pointer;
  opacity: 0.8;
  transition: 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;
