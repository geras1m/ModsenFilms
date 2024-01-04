import { FC } from "react";
import { HeaderBody, HeaderContainer } from "@components/Header/styled";
import { Logo } from "@components/Logo";
import { Search } from "@components/Search";
import { ThemeToggle } from "@components/ThemeToggle";

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <HeaderBody>
        <Logo />
        <Search />
        <ThemeToggle />
      </HeaderBody>
    </HeaderContainer>
  );
};
