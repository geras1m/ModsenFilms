import { FC } from "react";
import { ImgSizes, IMovie } from "@app-types/types";
import { baseImgUrl } from "@constants/constants";
import { parseYearFromDate } from "@utils/parseYearFromDate";
import DefaultPosterImg from "@assets/images/ElasticPosterNotFound.jpg";
import {
  AdditionalInform,
  Description,
  MovieName,
  Poster,
  PosterWrapper,
  ElasticSearchCardWrapper,
} from "@components/Search/styled";

interface ICardProps {
  movieData: IMovie;
}

export const ElasticSearchCard: FC<ICardProps> = ({ movieData }) => {
  const { title, poster_path: posterPath, release_date: date, overview } = movieData;

  const posterImgUrl = posterPath ? baseImgUrl + ImgSizes.avatar + posterPath : DefaultPosterImg;
  const description = overview ? overview : "No description";

  return (
    <ElasticSearchCardWrapper>
      <PosterWrapper>
        <Poster src={posterImgUrl} />
      </PosterWrapper>
      <Description>
        <MovieName>{title}</MovieName>
        <AdditionalInform>{parseYearFromDate(date)}</AdditionalInform>
        <AdditionalInform>{description}</AdditionalInform>
      </Description>
    </ElasticSearchCardWrapper>
  );
};
