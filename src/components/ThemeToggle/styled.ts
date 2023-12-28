import styled from "styled-components";
import { Theme, ThemeList } from "@app-types/types";

export const ToggleWrapper = styled.div`
  width: 50px;
  height: 28px;
  border: 2px solid rgba(255, 165, 0, 0.6);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: left;
  position: relative;
  cursor: pointer;
  transition: 0.4s ease;

  &:hover {
    border: 2px solid orange;
    box-shadow: 0 0 10px 5px rgb(255 209 0 / 20%);
  }
`;

export const Toggle = styled.div<{ theme: Theme }>`
  width: 27px;
  height: 27px;
  border: 2px solid rgba(255, 165, 0, 0.6);
  border-radius: 50%;
  position: absolute;
  left: -1px;
  transition: 0.4s ease;
  transform: translate(${(props) => (props.theme === ThemeList.light ? "0" : "22px")});
`;
