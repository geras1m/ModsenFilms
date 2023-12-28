import { FC } from "react";
import { SearchButton, SearchContainer, SearchInput } from "@components/Search/styled";
import SearchIcon from "@assets/icons/SearchBtnIcon.svg";

export const Search: FC = () => {
  return (
    <SearchContainer>
      <SearchInput />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </SearchContainer>
  );
};
