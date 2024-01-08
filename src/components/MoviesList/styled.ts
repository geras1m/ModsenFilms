import styled from "styled-components";

export const MoviesListBox = styled.main`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
`;

export const MoviesListContainer = styled.section`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 14px;
  padding-top: 28px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MovieListContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  grid-gap: 30px 20px;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const NoMovies = styled.p`
  text-align: center;
  width: 100%;
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.textColor};
`;
