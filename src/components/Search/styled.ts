import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 627px;
  height: 38px;
  display: flex;
  align-items: center;
  margin-right: 90px;
  position: relative;
`;

export const SearchInput = styled.input.attrs({
  type: "search",
  placeholder: "Search",
})`
  width: 100%;
  max-width: 570px;
  height: 100%;
  padding: 8px 15px;
  font-size: 14px;
  border: 1px solid rgba(196, 196, 196, 1);
  transition: 0.3s ease;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.backgroundColor};
  outline: none;

  &::placeholder {
    color: rgb(183, 183, 183);
  }

  &:hover {
    border: 1px solid #ffbb93;
  }

  &:focus {
    border: 1px solid #ff8e00;
  }

  &::-webkit-search-cancel-button {
    display: none;
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
  transition: 0.2s ease-in-out;
  opacity: 0.6;
  outline: none;

  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }

  &:focus {
    outline: 1px solid orange;
  }
`;

export const SearchButton = styled.button`
  width: 57px;
  height: 100%;
  border: 1px solid rgba(196, 196, 196, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease;
  background-color: ${({ theme }) => theme.backgroundColor};
  outline: none;

  &:hover {
    border: 1px solid #ffb082;
    background-color: #969696;
  }

  &:focus {
    border: 1px solid #ff8e00;
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
  border: 1px solid rgba(196, 196, 196, 1);
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.textColor};

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f9f9fd;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #969696;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: #f9f9fd;
  }
`;

export const ElasticSearchCardWrapper = styled.li`
  padding: 5px;
  width: 100%;
  border-bottom: 1px solid rgba(196, 196, 196, 1);
  list-style: none;
  display: flex;
  justify-content: space-between;
  column-gap: 5px;
  transition: 0.2s ease;
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
  max-width: 500px;
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
  color: orange;
  border-bottom: 1px solid rgba(196, 196, 196, 1);
`;

export const NotFoundResults = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
