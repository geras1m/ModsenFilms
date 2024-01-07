import { FC } from "react";
import { HeaderBody, HeaderContainer, ThemeContainer } from "@components/Header/styled";
import { Logo } from "@components/Logo";
import { Search } from "@components/Search";
import { ThemeToggle } from "@components/ThemeToggle";
import { BurgerMenu } from "@components/BurgerMenu";

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <HeaderBody>
        <Logo />
        <Search />
        <ThemeContainer>
          <ThemeToggle />
        </ThemeContainer>
        <BurgerMenu />
      </HeaderBody>
    </HeaderContainer>
  );
};
