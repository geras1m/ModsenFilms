import styled from "styled-components";

export const FilterBarBox = styled.div`
  border: 1px solid rgba(196, 196, 196, 1);
  border-left: none;
  border-right: none;
`;

export const FilterBarContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const FilterBarBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  padding: 12px 0;
`;

export const FilterItem = styled.button<{ selected: boolean }>`
  height: 30px;
  padding: 7px 21px;
  border: 1px solid rgba(196, 196, 196, 1);
  border-radius: 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ selected, theme }) => (selected ? "white" : theme.textColor)};
  background-color: ${({ selected, theme }) => (selected ? "black" : theme.backgroundColorGenre)};
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #969696;
  }

  &:disabled {
    cursor: auto;
    background-color: black;
  }
`;
