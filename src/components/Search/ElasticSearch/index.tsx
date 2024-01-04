import { ElasticSearchContainer, NotFoundResults, Total } from "@components/Search/styled";
import { Spinner } from "@components/Spinner";
import { IMovieResponse } from "@app-types/types";
import { FC } from "react";
import { ElasticSearchCard } from "@components/Search/Card";

interface IElasticSearchProps {
  moviesData: IMovieResponse | undefined;
  isLoading: boolean;
}

export const ElasticSearch: FC<IElasticSearchProps> = ({ moviesData, isLoading }) => {
  return (
    <ElasticSearchContainer>
      {!isLoading && <Total>Total: {!moviesData ? 0 : moviesData.total_results}</Total>}
      {isLoading && <Spinner />}
      {!isLoading && moviesData && moviesData.total_results === 0 && (
        <NotFoundResults>Search without result</NotFoundResults>
      )}
      {!isLoading &&
        moviesData &&
        moviesData.results.map((movie) => <ElasticSearchCard key={movie.id} movieData={movie} />)}
    </ElasticSearchContainer>
  );
};
