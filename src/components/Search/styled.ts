import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 627px;
  height: 38px;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input.attrs({
  type: "text",
  placeholder: "Search",
})`
  width: 100%;
  max-width: 570px;
  height: 100%;
  padding: 8px 15px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.51);
  border: 1px solid rgba(196, 196, 196, 1);
  transition: 0.3s ease;

  &:hover {
    border: 1px solid #ffb082;
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
  background-color: white;
  transition: 0.3s ease;

  &:hover {
    border: 1px solid #ffb082;
  }
`;
