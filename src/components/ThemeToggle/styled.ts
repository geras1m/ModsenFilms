import styled from "styled-components";
import { ThemeType, ThemeValue } from "@app-types/types";

interface IToggleProps {
  theme?: ThemeType;
}

export const ToggleWrapper = styled.button`
  width: 50px;
  height: 28px;
  border: 2px solid ${({ theme }) => theme.orange};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: left;
  position: relative;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  outline: none;
  background-color: ${({ theme }) => theme.bgColor};

  &:hover {
    border: 2px solid ${({ theme }) => theme.inputFocus};
    box-shadow: 0 0 10px 5px rgb(255 209 0 / 20%);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.borderColor};
  }
`;

export const Toggle = styled.div<IToggleProps>`
  width: 27px;
  height: 27px;
  border: 2px solid #f86f03ff;
  border-radius: 50%;
  position: absolute;
  left: -1px;
  transition: 0.3s ease;
  transform: translate(${(props) => (props.theme === ThemeValue.light ? "0" : "22px")});
`;
