import styled from "styled-components";

export const SearchContainer = styled.div`
  grid-area: search;
  justify-self: center;
  width: 100%;
  max-width: 627px;
  height: 38px;
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 950px) {
    max-width: 500px;
  }

  @media (max-width: 750px) {
    max-width: 100%;
  }
`;

export const SearchInput = styled.input.attrs({
  type: "search",
  placeholder: "Search",
})`
  width: 100%;
  max-width: 570px;
  height: 100%;
  padding: 8px 25px 8px 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  transition: ${({ theme }) => theme.transition};
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.bgColor};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.inputPlaceholder};
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.inputHover};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.inputFocus};
  }

  &::-webkit-search-cancel-button {
    display: none;
  }

  @media (max-width: 750px) {
    max-width: 100%;
  }
`;

export const ClearBtn = styled.div`
  width: 13px;
  height: 13px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 65px;
  cursor: pointer;
  background-color: transparent;
  transition: ${({ theme }) => theme.transition};
  opacity: 0.6;
  outline: none;

  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.orange};
  }
`;

export const SearchButton = styled.button`
  width: 57px;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.borderColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  background-color: ${({ theme }) => theme.bgColor};
  outline: none;

  &:hover {
    border: 1px solid ${({ theme }) => theme.inputHover};
    background-color: ${({ theme }) => theme.bgHover};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.inputFocus};
  }
`;

export const ElasticSearchContainer = styled.ul`
  position: absolute;
  overflow-y: scroll;
  z-index: 5;
  top: 38px;
  width: 100%;
  max-width: 627px;
  max-height: 450px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.textColor};

  &::-webkit-scrollbar {
    width: 10px;
    background-color: ${({ theme }) => theme.white};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.bgHover};
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: ${({ theme }) => theme.white};
  }

  @media (max-width: 750px) {
    max-width: 100%;
  }
`;

export const ElasticSearchCardWrapper = styled.li`
  padding: 5px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  list-style: none;
  display: grid;
  grid-template-columns: 100px 1fr;
  justify-content: space-between;
  column-gap: 5px;
  transition: ${({ theme }) => theme.transition};
`;

export const PosterWrapper = styled.div`
  overflow: hidden;
  width: 90px;
  height: 138px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Poster = styled.img.attrs(({ src }) => ({
  src: `${src}`,
  alt: "Movie poster",
  width: "90px",
}))`
  object-fit: cover;
`;

export const Description = styled.div`
  width: 100%;
`;

export const MovieName = styled.h3`
  font-weight: bold;
  font-size: 16px;
  margin: 5px 0;
`;

export const AdditionalInform = styled.p`
  font-size: 14px;
  margin: 5px 0;
  overflow: hidden;
  max-height: 65px;
`;

export const Total = styled.p`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  padding: 5px;
  color: ${({ theme }) => theme.orange};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

export const NotFoundResults = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
