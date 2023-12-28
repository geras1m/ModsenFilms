import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Theme } from "@app-types/types";

interface IAppState {
  theme: Theme;
}

const initialState: IAppState = {
  theme: "light",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = appSlice.actions;
export default appSlice.reducer;
