import { setTheme } from "@store/slices/appSlice";
import { ThemeType, ThemeValue } from "@app-types/types";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { Toggle, ToggleWrapper } from "@components/ThemeToggle/styled";

export const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((store) => store.app);

  const switchTheme = () => {
    const newTheme: ThemeType = theme === ThemeValue.light ? ThemeValue.dark : ThemeValue.light;
    dispatch(setTheme(newTheme));
  };

  return (
    <ToggleWrapper data-testid="toggle" onClick={switchTheme}>
      <Toggle data-testid="toggle-element" theme={theme} />
    </ToggleWrapper>
  );
};
