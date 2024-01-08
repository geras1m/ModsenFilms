import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

interface IBaseTheme {
  orange: string;
  black: string;
  white: string;
  lightGenre: string;
  darkGenre: string;
  bgHover: string;
  borderColor: string;
  boxShadow: string;
  inputPlaceholder: string;
  inputHover: string;
  inputFocus: string;
  transition: string;
  transitionBurger: string;
}

export const baseTheme: IBaseTheme = {
  orange: "#F86F03FF",
  black: "#000000FF",
  white: "#FFFFFFFF",
  lightGenre: "#00000019",
  darkGenre: "#6767679E",
  bgHover: "#969696",
  borderColor: "#C4C4C4FF",
  boxShadow: "#7D7D7DFF",
  inputPlaceholder: "#B7B7B7FF",
  inputHover: "#ffbb93",
  inputFocus: "#ff8e00",
  transition: ".2s ease-in-out",
  transitionBurger: "all 0.3s linear",
};

interface IThemeTemplate extends IBaseTheme {
  bgColor: string;
  bgColorGenre: string;
  textColor: string;
}

export const darkTheme: IThemeTemplate = {
  ...baseTheme,
  bgColor: baseTheme.black,
  bgColorGenre: baseTheme.darkGenre,
  textColor: baseTheme.white,
};

export const lightTheme: IThemeTemplate = {
  ...baseTheme,
  bgColor: baseTheme.white,
  bgColorGenre: baseTheme.lightGenre,
  textColor: baseTheme.black,
};

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: "Roboto", sans-serif;;
    src: url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
  }

  * {
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  body {
    transition: ${({ theme }) => theme.transition};
    background-color: ${({ theme }) => theme.bgColor};
  }

  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;
