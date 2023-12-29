import { Toggle, ToggleWrapper } from "@components/ThemeToggle/styled";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { setTheme } from "@store/slices/appSlice";
import { ThemeType, ThemeValue } from "@app-types/types";

export const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((store) => store.app);

  const switchTheme = () => {
    const newTheme: ThemeType =
      theme === ThemeValue.light ? ThemeValue.dark : ThemeValue.light;
    dispatch(setTheme(newTheme));
  };

  return (
    <ToggleWrapper onClick={switchTheme}>
      <Toggle theme={theme} />
    </ToggleWrapper>
  );
};
