import styled from "styled-components";

export const MoviesListBox = styled.main`
  flex: 1 0 auto;
`;

export const MoviesListContainer = styled.section`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 28px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MovieListContent = styled.div`
  width: 100%;
  //height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  transition: 0.3s ease;
  grid-gap: 30px 20px;
`;

export const NoMovies = styled.p`
  text-align: center;
  width: 100%;
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.textColor};
`;
