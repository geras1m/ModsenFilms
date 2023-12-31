import styled from "styled-components";
import { Color } from "@components/App/styled";

export const MoviesListBox = styled.main`
  flex: 1 0 auto;
`;

export const MoviesListContainer = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 28px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MovieListContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  transition: 0.3s ease;
  grid-gap: 30px 20px;
`;

export const ShowMoreBtn = styled.button`
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
`;
