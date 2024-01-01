import { MovieListContent, MoviesListBox, MoviesListContainer } from "@components/MoviesList/styled";
import { MovieCard } from "@components/MovieCard";
import { useGetMoviesQuery } from "@store/api/movieApi";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { useEffect } from "react";
import { addMovies, setVideoId } from "@store/slices/movieSlice";
import { Skeleton } from "@components/Skeleton";
import { ShowMoreBtn } from "@components/ShowMoreBtn";

export const MoviesList = () => {
  const dispatch = useAppDispatch();
  const { movies, page } = useAppSelector((store) => store.movie);
  const { data, isFetching } = useGetMoviesQuery({ page });

  //{skip: boolean}

  useEffect(() => {
    if (data) {
      dispatch(addMovies(data.results));
    }
  }, [data]);

  const setVideoIdToState = (videoId: number) => {
    dispatch(setVideoId(videoId));
  };

  //DONE: 1) вынести логику дозагрузки и кнопку в отдельный компонент
  //DONE: 2) Сделать отображение скелетона
  //DONE: 3) свойство key для ютуба может быть undefined
  //Done: 4) свойство для постеров может быть undefined

  const skeletons = [...new Array(20).fill("")].map((_, index) => <Skeleton key={index} />);

  const movieCards =
    movies.length !== 0 &&
    movies.map((movie, index) => (
      <MovieCard
        key={index}
        movieData={movie}
        isLoading={isFetching}
        onClick={() => setVideoIdToState(movie.id)}
      />
    ));

  return (
    <MoviesListBox>
      <MoviesListContainer>
        <MovieListContent>
          {movieCards}
          {isFetching && skeletons}
        </MovieListContent>
        <ShowMoreBtn />
      </MoviesListContainer>
    </MoviesListBox>
  );
};
