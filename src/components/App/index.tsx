import { FC } from "react";
import { Header } from "@components/Header";
import { darkTheme, GlobalStyles, lightTheme } from "@components/App/styled";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "@hooks/reduxHooks";
import { ThemeValue } from "@app-types/types";
import { FilterBar } from "@components/FilterBar";
import { Footer } from "@components/Footer";
import { MoviesList } from "@components/MoviesList";

export const App: FC = () => {
  const { theme } = useAppSelector((store) => store.app);

  return (
    <ThemeProvider theme={theme === ThemeValue.light ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header />
      <FilterBar />
      <MoviesList />
      <Footer />
    </ThemeProvider>
  );
};
