import { useEffect, useState } from "react";
import { useAppSelector } from "@hooks/reduxHooks";
import { BurgerWrapper, Menu, SelectedThemeText, Text } from "@components/BurgerMenu/styled";
import { ThemeToggle } from "@components/ThemeToggle";

export const BurgerMenu = () => {
  const { theme } = useAppSelector((store) => store.app);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <BurgerWrapper tabIndex={0} open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerWrapper>
      <Menu open={open}>
        <Text>
          The <SelectedThemeText>{theme}</SelectedThemeText> theme is enabled
        </Text>
        <ThemeToggle />
      </Menu>
    </>
  );
};
