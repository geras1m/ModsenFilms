import {
  MovieListContent,
  MoviesListBox,
  MoviesListContainer,
  ShowMoreBtn,
} from "@components/MoviesList/styled";
import { MovieCard } from "@components/MovieCard";
import { useGetMoviesQuery } from "@store/api/movieApi";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { useEffect } from "react";
import { addMovies, setPage, setVideoId } from "@store/slices/movieSlice";

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

  const setVideoIdToState = (videoId: number) => {
    dispatch(setVideoId(videoId));
  };

  //TODO: вынести логику дозагрузки и кнопку в отдельный компонент

  return (
    <MoviesListBox>
      <MoviesListContainer>
        <MovieListContent>
          {movies.length !== 0 &&
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movieData={movie}
                onClick={() => setVideoIdToState(movie.id)}
              />
            ))}
        </MovieListContent>
        <ShowMoreBtn onClick={loadMoreMovies}>Show More</ShowMoreBtn>
      </MoviesListContainer>
    </MoviesListBox>
  );
};
