import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Provider } from "react-redux";

import { store } from "@store/store";
import { IMovie } from "@app-types/types";
import { MoviesList } from "@components/MoviesList";
import { MovieCard } from "@components/MovieCard";
import { ShowMoreBtn } from "@components/ShowMoreBtn";
import * as hooks from "@hooks/reduxHooks";

const mockData: IMovie = {
  adult: false,
  backdrop_path: "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
  genre_ids: [36, 10752, 18],
  id: 753342,
  original_language: "en",
  original_title: "Napoleon",
  overview:
    "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
  popularity: 2998.164,
  poster_path: "/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg",
  release_date: "2023-11-22",
  title: "Napoleon",
  video: false,
  vote_average: 6.5,
  vote_count: 1123,
};

describe("Movie list component", () => {
  it("should render the movie list component", async () => {
    render(
      <Provider store={store}>
        <MoviesList />
      </Provider>,
    );
    expect(screen.getByTestId("movies-wrapper")).toBeInTheDocument();
  });

  it("should call function to set video id by clicking on a card", async () => {
    const setVideoId = jest.fn();
    render(
      <Provider store={store}>
        <MovieCard onClick={setVideoId} isLoading={false} movieData={mockData} />
      </Provider>,
    );

    const card = screen.getByTestId("movie-card");
    expect(card).toBeInTheDocument();
    await userEvent.click(card);
    expect(setVideoId).toHaveBeenCalled();
  });

  it("should call function to set page by clicking show more button", async () => {
    const mockedDispatch = jest.spyOn(hooks, "useAppDispatch");

    render(
      <Provider store={store}>
        <ShowMoreBtn isDisabled={false} />
      </Provider>,
    );

    const button = screen.getByTestId("show-more-btn");
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    expect(mockedDispatch).toHaveBeenCalled();
  });
});
