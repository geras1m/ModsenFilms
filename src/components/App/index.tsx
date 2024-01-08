import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeValue } from "@app-types/types";
import { useAppSelector } from "@hooks/reduxHooks";
import { darkTheme, GlobalStyles, lightTheme } from "@components/App/styled";
import { Header } from "@components/Header";
import { FilterBar } from "@components/FilterBar";
import { Footer } from "@components/Footer";
import { MoviesList } from "@components/MoviesList";
import { VideoModal } from "@components/VideoModal";

export const App: FC = () => {
  const { theme } = useAppSelector((store) => store.app);

  //TODO посмотреть ререндеры и если что обернуть в мемо их

  return (
    <ThemeProvider theme={theme === ThemeValue.light ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header />
      <FilterBar />
      <MoviesList />
      <Footer />
      <VideoModal />
    </ThemeProvider>
  );
};
