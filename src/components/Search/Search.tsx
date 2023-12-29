import { FC } from "react";
import { SearchButton, SearchContainer, SearchInput } from "@components/Search/styled";
import SearchIcon from "@assets/icons/SearchBtnIcon.svg";
import { useAppSelector } from "@hooks/reduxHooks";
import { ThemeValue } from "@app-types/types";
import { Color } from "@components/App/styled";

export const Search: FC = () => {
  const { theme } = useAppSelector((store) => store.app);

  return (
    <SearchContainer>
      <SearchInput />
      <SearchButton>
        <SearchIcon fill={theme === ThemeValue.light ? "" : Color.WHITE} />
      </SearchButton>
    </SearchContainer>
  );
};
