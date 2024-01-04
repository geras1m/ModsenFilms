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
import { ImgSizes, IMovie } from "@app-types/types";
import { FC } from "react";
import { parseYearFromDate } from "@root/utils/parseYearFromDate";
import { parseGenres } from "@root/utils/parseGenres";
import PosterNotFoundImg from "@assets/images/PosterNotFound.jpg";
import DefaultAvatarImg from "@assets/images/DefaultAvatar.png";
import { baseImgUrl } from "@root/constants/constants";

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
