import { Toggle, ToggleWrapper } from "@components/ThemeToggle/styled";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { setTheme } from "@store/slices/appSlice";
import { Theme, ThemeList } from "@app-types/types";

export const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((store) => store.app);

  const switchTheme = () => {
    const newTheme: Theme = theme === ThemeList.light ? ThemeList.dark : ThemeList.light;
    dispatch(setTheme(newTheme));
  };

  return (
    <ToggleWrapper onClick={switchTheme}>
      <Toggle theme={theme} />
    </ToggleWrapper>
  );
};
