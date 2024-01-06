import { FC } from "react";
import { LogoContainer, LogoText } from "@components/Logo/styled";
import LogoIcon from "@assets/icons/Logo.svg";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { clearMovies, setDisplayNow, setGenreId, setPage, setSearchTitle } from "@store/slices/movieSlice";
import { DisplayNowValue } from "@app-types/types";
import { genres } from "@root/constants/constants";

//TODO повесить клик чиобы выставлял категорию - все

export const Logo: FC = () => {
  const { genreId } = useAppSelector((store) => store.movie);
  const dispatch = useAppDispatch();
  const genreAll = genres[0].genreId;

  const setDefaultSetting = () => {
    if (genreId !== genreAll) {
      dispatch(clearMovies());
    }
    dispatch(setDisplayNow(DisplayNowValue.default));
    dispatch(setPage(1));
    dispatch(setSearchTitle(""));
    dispatch(setGenreId(""));
  };

  return (
    <LogoContainer onClick={setDefaultSetting}>
      <LogoIcon />
      <LogoText>ModsenFilms</LogoText>
    </LogoContainer>
  );
};
