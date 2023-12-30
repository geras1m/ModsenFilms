import styled from "styled-components";
import { ThemeType, ThemeValue } from "@app-types/types";

interface IToggleProps {
  theme?: ThemeType;
}

export const ToggleWrapper = styled.button`
  width: 50px;
  height: 28px;
  border: 2px solid rgba(255, 165, 0, 0.6);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: left;
  position: relative;
  cursor: pointer;
  transition: 0.3s ease;
  outline: none;
  background-color: ${({ theme }) => theme.backgroundColor};

  &:hover {
    border: 2px solid orange;
    box-shadow: 0 0 10px 5px rgb(255 209 0 / 20%);
  }

  &:focus {
    outline: 2px solid #a4a4a4;
  }
`;

export const Toggle = styled.div<IToggleProps>`
  width: 27px;
  height: 27px;
  border: 2px solid rgba(255, 165, 0, 0.6);
  border-radius: 50%;
  position: absolute;
  left: -1px;
  transition: 0.3s ease;
  transform: translate(${(props) => (props.theme === ThemeValue.light ? "0" : "22px")});
`;
