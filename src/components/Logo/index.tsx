import { FC } from "react";
import { LogoContainer, LogoText } from "@components/Logo/styled";
import LogoIcon from "@assets/icons/Logo.svg";

export const Logo: FC = () => {
  return (
    <LogoContainer>
      <LogoIcon />
      <LogoText>ModsenFilms</LogoText>
    </LogoContainer>
  );
};
