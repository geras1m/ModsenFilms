import {
  Avatar,
  Description,
  Information,
  MovieCardContainer,
  MoviePoster,
  MoviePosterWrapper,
  Name,
  Text,
} from "@components/MovieCard/styled";
import { IMovie } from "@app-types/types";
import { FC } from "react";
import { parseYearFromDate } from "@root/utils/parseYearFromDate";
import { parseGenres } from "@root/utils/parseGenres";

interface IMovieCardProps {
  movieData: IMovie;
}

export const MovieCard: FC<IMovieCardProps> = ({ movieData }) => {
  const { title, poster_path, backdrop_path, release_date, genre_ids } = movieData;

  return (
    <MovieCardContainer>
      <MoviePosterWrapper>
        <MoviePoster src={backdrop_path} />
      </MoviePosterWrapper>
      <Information>
        <Avatar src={poster_path} />
        <Description>
          <Name>{title}</Name>
          <Text>
            {parseGenres(genre_ids)} • {parseYearFromDate(release_date)}
          </Text>
        </Description>
      </Information>
    </MovieCardContainer>
  );
};
