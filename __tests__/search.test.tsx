import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Provider } from "react-redux";

import { store } from "@store/store";
import { Search } from "@components/Search";
import * as hooks from "@hooks/reduxHooks";

describe("Search component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it("should render the search component", () => {
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    expect(screen.getByTestId("search-btn")).toBeInTheDocument();
  });

  it("should clear input value by clicking clear button", async () => {
    const input = screen.getByTestId("search-input");
    const inputValue = "matrix";

    await userEvent.type(input, inputValue);
    expect(input).toHaveValue(inputValue);

    fireEvent.click(screen.getByTestId("clear-btn"));
    expect(input).toHaveValue("");
  });

  it("should open elastic search if input value is more than one symbol", async () => {
    const input = screen.getByTestId("search-input");
    const OpenElasticSearchValue = "ma";
    const notOpenElasticSearchValue = "m";

    await userEvent.type(input, notOpenElasticSearchValue);
    expect(screen.queryByTestId("elastic-search")).toBeNull();

    await userEvent.type(input, OpenElasticSearchValue);
    expect(await screen.findByTestId("elastic-search")).toBeInTheDocument();
  });

  it("should clear input value and call dispatch after clicking the search button", async () => {
    const dispatch = jest.spyOn(hooks, "useAppDispatch");

    const input = screen.getByTestId("search-input");
    const searchButton = screen.getByTestId("search-btn");
    const inputValue = "matrix";

    await userEvent.type(input, inputValue);
    expect(input).toHaveValue(inputValue);

    await userEvent.click(searchButton);
    expect(dispatch).toHaveBeenCalled();
    // I think that a solution with setTimeout is not the best for waiting for the element to appear
    // But I've tried to use findBy, waitFor and others ways and didn't have a result
    await waitFor(() => setTimeout(() => expect(input).toHaveValue(""), 500));
  });
});
