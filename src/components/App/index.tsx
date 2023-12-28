import { FC } from "react";
import { Header } from "@components/Header";
import { GlobalStyles } from "@components/App/styled";
import { Provider } from "react-redux";
import { store } from "@store/store";

export const App: FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header />
    </Provider>
  );
};
