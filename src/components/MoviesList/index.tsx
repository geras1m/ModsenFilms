import {
  MovieListContent,
  MoviesListBox,
  MoviesListContainer,
  NoMovies,
} from "@components/MoviesList/styled";
import { MovieCard } from "@components/MovieCard";
import { useFindMoviesByTitleQuery, useGetMoviesQuery } from "@store/api/movieApi";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { useEffect, useState } from "react";
import { setMovies, setVideoId } from "@store/slices/movieSlice";
import { Skeleton } from "@components/Skeleton";
import { ShowMoreBtn } from "@components/ShowMoreBtn";
import { moviesPerPage } from "@root/constants/constants";
import { setIsVideoModalOpen } from "@store/slices/appSlice";
import { DisplayNowValue, IMovieResponse } from "@app-types/types";

export const MoviesList = () => {
  const [isDisabledBtn, setIsDisabledBtn] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { movies, page, genreId, displayNow, searchTitle } = useAppSelector((store) => store.movie);
  const skipLoading = displayNow === DisplayNowValue.search;
  const {
    data: moviesByGenre,
    isFetching: isFetchingByGenre,
    isSuccess: isSuccessByGenre,
  } = useGetMoviesQuery({ page, genre: genreId }, { skip: skipLoading });
  const {
    data: moviesByTitle,
    isFetching: isFetchingByTitle,
    isSuccess: isSuccessByTitle,
  } = useFindMoviesByTitleQuery({ page, title: searchTitle }, { skip: !skipLoading });

  const isLoading = isFetchingByGenre || isFetchingByTitle;

  const getCurrentMovieList = (): IMovieResponse | undefined => {
    if (moviesByGenre && isSuccessByGenre) return moviesByGenre;
    if (moviesByTitle && isSuccessByTitle) return moviesByTitle;
  };

  useEffect(() => {
    const movieList = getCurrentMovieList();
    if (movieList) {
      dispatch(setMovies(movieList.results));
      setIsDisabledBtn(movieList.total_pages <= page);
    }
  }, [moviesByGenre, moviesByTitle, genreId]);

  const setVideoIdToState = (videoId: number) => {
    dispatch(setVideoId(videoId));
    dispatch(setIsVideoModalOpen(true));
  };

  const skeletons = [...new Array(moviesPerPage).fill("")].map((_, index) => <Skeleton key={index} />);

  const movieCards = movies.map((movie) => (
    <MovieCard
      key={movie.id}
      movieData={movie}
      isLoading={isLoading}
      onClick={() => setVideoIdToState(movie.id)}
    />
  ));

  return (
    <MoviesListBox>
      <MoviesListContainer>
        <MovieListContent>
          {movies.length !== 0 && movieCards}
          {isLoading && skeletons}
        </MovieListContent>
        {movies.length === 0 && !isLoading && <NoMovies>No movies :(</NoMovies>}
        {movies.length === 0 ? null : <ShowMoreBtn isDisabled={isLoading || isDisabledBtn} />}
      </MoviesListContainer>
    </MoviesListBox>
  );
};
