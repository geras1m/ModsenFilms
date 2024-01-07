import styled from "styled-components";

export const HeaderBody = styled.div`
  padding: 15px 0;
  display: grid;
  align-items: center;
  grid-template-columns: 150px auto 150px;
  grid-template-rows: repeat(1, 1fr);
  grid-template-areas: "logo search theme";
  margin: 0 14px;

  @media (max-width: 950px) {
    grid-template-columns: 170px auto 90px;
  }

  @media (max-width: 750px) {
    grid-template-columns: auto auto;
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "logo theme"
      "search search";
    grid-row-gap: 24px;
  }
`;

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const ThemeContainer = styled.div`
  grid-area: theme;
  justify-self: end;

  @media (max-width: 750px) {
    display: none;
  }
`;
