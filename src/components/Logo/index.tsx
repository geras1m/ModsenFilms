import { FC } from "react";
import { LogoContainer, LogoText } from "@components/Logo/styled";
import LogoIcon from "@assets/icons/Logo.svg";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { clearMovies, setDisplayNow, setGenreId, setPage, setSearchTitle } from "@store/slices/movieSlice";
import { DisplayNowValue } from "@app-types/types";
import { genres } from "@constants/constants";

export const Logo: FC = () => {
  const { genreId } = useAppSelector((store) => store.movie);
  const dispatch = useAppDispatch();
  const selectedGenreAll = genres[0].genreId;

  const setDefaultSetting = () => {
    if (genreId !== selectedGenreAll) {
      dispatch(clearMovies());
    }
    dispatch(setDisplayNow(DisplayNowValue.default));
    dispatch(setPage(1));
    dispatch(setSearchTitle(""));
    dispatch(setGenreId(""));
  };

  return (
    <LogoContainer data-testid="logo" onClick={setDefaultSetting}>
      <LogoIcon />
      <LogoText>ModsenFilms</LogoText>
    </LogoContainer>
  );
};
