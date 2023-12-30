import styled from "styled-components";
import { Color } from "@components/App/styled";

export const MoviesListBox = styled.main`
  flex: 1 0 auto;
`;

export const MoviesListContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  transition: 0.3s ease;
  padding-top: 28px;
  padding-bottom: 50px;
  grid-gap: 30px 20px;
`;

export const ShowMoreBtn = styled.button`
  padding: 14px 35px;
  border-radius: 10px;
  border: none;
  color: ${Color.WHITE};
  background-color: ${Color.ORANGE};
  cursor: pointer;
`;
