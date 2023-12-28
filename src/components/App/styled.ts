import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

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
`;
