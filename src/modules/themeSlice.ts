import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

type mode = 'light' | 'dark';

type ThemeState = {
  theme: mode;
};

const initialState: ThemeState = {
  theme: (localStorage.getItem('theme') as mode)
    ? (localStorage.getItem('theme') as mode)
    : 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<mode>) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
