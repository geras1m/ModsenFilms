import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "@store/store";
import { ThemeToggle } from "@components/ThemeToggle";
import * as hooks from "@hooks/reduxHooks";

describe("Theme toggle component", () => {
  it("should render the theme toggle", () => {
    render(
      <Provider store={store}>
        <ThemeToggle />
      </Provider>,
    );

    expect(screen.getByTestId("toggle")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-element")).toBeInTheDocument();
  });

  it("should call dispatch by clicking theme toggle", () => {
    const mockedDispatch = jest.spyOn(hooks, "useAppDispatch");

    render(
      <Provider store={store}>
        <ThemeToggle />
      </Provider>,
    );

    fireEvent.click(screen.getByTestId("toggle"));
    expect(mockedDispatch).toHaveBeenCalled();
  });
});
