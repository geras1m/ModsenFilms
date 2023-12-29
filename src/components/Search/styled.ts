import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 627px;
  height: 38px;
  display: flex;
  align-items: center;
  margin-right: 90px;
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
