import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeType } from "@app-types/types";

interface IAppState {
  theme: ThemeType;
}

const initialState: IAppState = {
  theme: "light",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = appSlice.actions;
export default appSlice.reducer;
