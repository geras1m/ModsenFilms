import { ChangeEvent, FC, useEffect, useState, KeyboardEvent } from "react";
import { ClearBtn, SearchButton, SearchContainer, SearchInput } from "@components/Search/styled";
import SearchIcon from "@assets/icons/SearchBtnIcon.svg";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { DisplayNowValue, ThemeValue } from "@app-types/types";
import { Color } from "@components/App/styled";
import { useDebounce } from "@hooks/useDebounce";
import { useFindMoviesByTitleQuery } from "@store/api/movieApi";
import { ElasticSearch } from "@components/Search/ElasticSearch";
import { setIsElasticSearchModalOpen } from "@store/slices/appSlice";
import { minimumValueLength, withoutGenre } from "@root/constants/constants";
import { clearMovies, setDisplayNow, setGenreId, setPage, setSearchTitle } from "@store/slices/movieSlice";
import CrossImg from "@assets/icons/Cross.svg";

export const Search: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { theme, isElasticSearchModalOpened } = useAppSelector((store) => store.app);
  const dispatch = useAppDispatch();
  const debouncedValue = useDebounce(inputValue);
  const skipLoading = debouncedValue.length <= minimumValueLength;
  const { data: moviesByTitle, isFetching } = useFindMoviesByTitleQuery(
    {
      title: debouncedValue.trim(),
      page: 1,
    },
    { skip: skipLoading },
  );

  useEffect(() => {
    debouncedValue.length > minimumValueLength && !isElasticSearchModalOpened && setOpenElasticSearch(true);
    inputValue.length <= minimumValueLength && isElasticSearchModalOpened && setOpenElasticSearch(false);
  }, [debouncedValue]);

  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => setInputValue("");

  const setOpenElasticSearch = (value: boolean) => {
    dispatch(setIsElasticSearchModalOpen(value));
  };

  const displayMovies = () => {
    if (moviesByTitle && debouncedValue.length > minimumValueLength) {
      dispatch(clearMovies());
      dispatch(setDisplayNow(DisplayNowValue.search));
      dispatch(setSearchTitle(debouncedValue.trim()));
      dispatch(setPage(1));
      dispatch(setGenreId(withoutGenre));
      clearInput();
    }
  };

  const displayMoviesByEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      displayMovies();
    }
  };

  const iconColor = theme === ThemeValue.light ? "" : Color.WHITE;

  return (
    <SearchContainer>
      <SearchInput
        onBlur={() => setOpenElasticSearch(false)}
        onFocus={() => debouncedValue.length > minimumValueLength && setOpenElasticSearch(true)}
        value={inputValue}
        onChange={changeInputValue}
        onKeyDown={displayMoviesByEnter}
      />
      {debouncedValue.length > 0 && (
        <ClearBtn tabIndex={0} onClick={clearInput}>
          <CrossImg fill={iconColor} />
        </ClearBtn>
      )}
      <SearchButton onClick={displayMovies}>
        <SearchIcon fill={iconColor} />
      </SearchButton>
      {isElasticSearchModalOpened && <ElasticSearch moviesData={moviesByTitle} isLoading={isFetching} />}
    </SearchContainer>
  );
};
