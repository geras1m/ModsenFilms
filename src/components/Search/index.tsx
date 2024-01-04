import { ChangeEvent, FC, useEffect, useState } from "react";
import { SearchButton, SearchContainer, SearchInput } from "@components/Search/styled";
import SearchIcon from "@assets/icons/SearchBtnIcon.svg";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { ThemeValue } from "@app-types/types";
import { Color } from "@components/App/styled";
import { useDebounce } from "@hooks/useDebounce";
import { useFindMoviesByTitleQuery } from "@store/api/movieApi";
import { ElasticSearch } from "@components/Search/ElasticSearch";
import { setIsElasticSearchModalOpen } from "@store/slices/appSlice";
import { minimumValueLength } from "@root/constants/constants";

export const Search: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { theme, isElasticSearchModalOpened } = useAppSelector((store) => store.app);
  const dispatch = useAppDispatch();
  const debouncedValue = useDebounce(inputValue);
  const { data: moviesByTitle, isFetching } = useFindMoviesByTitleQuery(
    { title: debouncedValue.trim() },
    { skip: debouncedValue.length <= minimumValueLength },
  );

  // useEffect(() => {
  //   moviesByTitle && dispatch(setMovies(moviesByTitle.results));
  // }, [moviesByTitle]);

  useEffect(() => {
    debouncedValue.length > minimumValueLength && !isElasticSearchModalOpened && openElasticSearch();
    inputValue.length <= minimumValueLength && isElasticSearchModalOpened && closeElasticSearch();
  }, [debouncedValue]);

  //TODO кнопку для очистки инпута

  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const closeElasticSearch = () => {
    dispatch(setIsElasticSearchModalOpen(false));
  };

  const openElasticSearch = () => {
    dispatch(setIsElasticSearchModalOpen(true));
  };

  const displayMovies = () => {};

  return (
    <SearchContainer>
      <SearchInput
        onBlur={closeElasticSearch}
        onFocus={() => debouncedValue.length > minimumValueLength && openElasticSearch()}
        value={inputValue}
        onChange={changeInputValue}
      />
      <SearchButton>
        <SearchIcon fill={theme === ThemeValue.light ? "" : Color.WHITE} />
      </SearchButton>
      {isElasticSearchModalOpened && <ElasticSearch moviesData={moviesByTitle} isLoading={isFetching} />}
    </SearchContainer>
  );
};
