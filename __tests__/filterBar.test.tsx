import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Provider } from "react-redux";

import { store } from "@store/store";
import { FilterBar } from "@components/FilterBar";
import { genres } from "@constants/constants";
import * as hooks from "@hooks/reduxHooks";

describe("Filter bar component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <FilterBar />
      </Provider>,
    );
  });

  it("should render the filter bar component", () => {
    expect(screen.getByTestId("filter-bar")).toBeInTheDocument();
    genres.forEach((genre) => expect(screen.getByTestId(genre.name)).toBeInTheDocument());
  });

  it("should call dispatch by clicking on any genre button", async () => {
    const dispatch = jest.spyOn(hooks, "useAppDispatch");
    await userEvent.click(screen.getByTestId("drama"));
    expect(dispatch).toHaveBeenCalled();

    await userEvent.click(screen.getByTestId("romantic"));
    expect(dispatch).toHaveBeenCalled();
  });
});
