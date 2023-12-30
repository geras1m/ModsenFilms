import {
  MoviesListBox,
  MoviesListContainer,
  ShowMoreBtn,
} from "@components/MoviesList/styled";
import { MovieCard } from "@components/MovieCard";
import { useGetMoviesQuery } from "@store/api/movieApi";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { useEffect } from "react";
import { addMovies, setPage } from "@store/slices/movieSlice";

export const MoviesList = () => {
  const dispatch = useAppDispatch();
  const { movies, page } = useAppSelector((store) => store.movie);
  const { data } = useGetMoviesQuery({ page });

  useEffect(() => {
    if (data) {
      dispatch(addMovies(data.results));
    }
  }, [data]);

  const loadMoreMovies = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <MoviesListBox>
      <MoviesListContainer>
        {movies.length !== 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movieData={movie} />)}
        <ShowMoreBtn onClick={loadMoreMovies}>Show More</ShowMoreBtn>
      </MoviesListContainer>
    </MoviesListBox>
  );
};
