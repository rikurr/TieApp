import React, { FC } from 'react';
import {
  createMuiTheme,
  ThemeProvider as MaterialThemeProvider,
} from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSelector } from 'react-redux';
import { selectTheme } from './modules/themeSlice';

const ThemeProviderWrap: FC = ({ children }) => {
  const mode = useSelector(selectTheme);
  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      type: mode,
      primary: {
        light: '#6effe8',
        main: '#1de9b6',
        dark: '#00b686',
        contrastText: '#000',
      },
      secondary: {
        light: '#b47cff',
        main: '#7c4dff',
        dark: '#3f1dcb',
        contrastText: '#fff',
      },
    },
    typography: {
      fontFamily: ['Noto Sans JP', 'Lato', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontSize: '1.75rem',
        fontWeight: 'bold',
      },
      h2: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
      },
      h3: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
      },
      h4: {
        fontSize: '1.125rem',
        fontWeight: 'bold',
      },
      h5: {
        fontSize: '1rem',
        fontWeight: 'bold',
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 'bold',
      },
      button: {
        textTransform: 'none',
      },
    },
    props: {
      MuiCheckbox: {
        color: 'primary',
      },
      MuiRadio: {
        color: 'primary',
      },
      MuiSwitch: {
        color: 'primary',
      },
    },
  });
  return (
    <MaterialThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline>{children}</CssBaseline>
      </StyledThemeProvider>
    </MaterialThemeProvider>
  );
};

export default ThemeProviderWrap;
