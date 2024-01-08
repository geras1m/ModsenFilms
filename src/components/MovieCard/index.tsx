import { FC } from "react";
import PosterNotFoundImg from "@assets/images/PosterNotFound.jpg";
import DefaultAvatarImg from "@assets/images/DefaultAvatar.png";
import { parseYearFromDate } from "@utils/parseYearFromDate";
import { parseGenres } from "@utils/parseGenres";
import { baseImgUrl } from "@constants/constants";
import { ImgSizes, IMovie } from "@app-types/types";
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

interface IMovieCardProps {
  movieData: IMovie;
  isLoading: boolean;
  onClick: () => void;
}

export const MovieCard: FC<IMovieCardProps> = ({ movieData, onClick }) => {
  const {
    title,
    poster_path: iconPath,
    backdrop_path: posterPath,
    release_date: date,
    genre_ids: genreIDs,
  } = movieData;

  const posterImgUrl = posterPath ? baseImgUrl + ImgSizes.poster + posterPath : PosterNotFoundImg;
  const avatarImgUrl = iconPath ? baseImgUrl + ImgSizes.avatar + iconPath : DefaultAvatarImg;

  return (
    <MovieCardContainer onClick={onClick}>
      <MoviePosterWrapper>
        <MoviePoster src={posterImgUrl} />
      </MoviePosterWrapper>
      <Information>
        <Avatar src={avatarImgUrl} />
        <Description>
          <Name>{title}</Name>
          <Text>
            {parseGenres(genreIDs)} • {parseYearFromDate(date)}
          </Text>
        </Description>
      </Information>
    </MovieCardContainer>
  );
};
