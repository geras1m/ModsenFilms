import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export enum Color {
  ORANGE = "#F86F03FF",
  BLACK = "#000000FF",
  LIGHT_BLACK = "#151515FF",
  LIGHT_GENRE = "#00000019",
  DARK_GENRE = "#6767679E",
  WHITE = "#FFFFFFFF",
}

interface IThemeTemplate {
  backgroundColor: string;
  backgroundColorGenre: string;
  textColor: string;
}

export const darkTheme: IThemeTemplate = {
  backgroundColor: Color.LIGHT_BLACK,
  backgroundColorGenre: Color.DARK_GENRE,
  textColor: Color.WHITE,
};

export const lightTheme: IThemeTemplate = {
  backgroundColor: Color.WHITE,
  backgroundColorGenre: Color.LIGHT_GENRE,
  textColor: Color.BLACK,
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
  
body{
  transition: .3s ease;
  background-color: ${({ theme }) => theme.backgroundColor};
}
`;
