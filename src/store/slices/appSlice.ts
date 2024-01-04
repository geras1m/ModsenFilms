import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeType } from "@app-types/types";

interface IAppState {
  theme: ThemeType;
  isModalOpened: boolean;
  isElasticSearchModalOpened: boolean;
}

const initialState: IAppState = {
  theme: "light",
  isModalOpened: false,
  isElasticSearchModalOpened: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
    },
    setIsVideoModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalOpened = action.payload;
    },
    setIsElasticSearchModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isElasticSearchModalOpened = action.payload;
    },
  },
});

export const { setTheme, setIsVideoModalOpen, setIsElasticSearchModalOpen } = appSlice.actions;
export default appSlice.reducer;
