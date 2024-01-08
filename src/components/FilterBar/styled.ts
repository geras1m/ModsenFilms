import styled from "styled-components";

export const FilterBarBox = styled.div`
  border: 1px solid ${({ theme }) => theme.borderColor};
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
  margin: 0 14px;

  @media (max-width: 700px) {
    justify-content: left;
    flex-wrap: wrap;
    row-gap: 6px;
  }
`;

export const FilterItem = styled.button<{ selected: boolean }>`
  height: 30px;
  padding: 7px 21px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ selected, theme }) => (selected ? "white" : theme.textColor)};
  background-color: ${({ selected, theme }) => (selected ? "black" : theme.bgColorGenre)};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.bgHover};
  }

  &:disabled {
    cursor: auto;
    background-color: ${({ theme }) => theme.black};
  }
`;
