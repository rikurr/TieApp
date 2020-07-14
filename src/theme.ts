import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#8c9eff',
      main: '#536dfe',
      dark: '#304ffe',
      contrastText: '#333',
    },
    secondary: {
      light: '#a7ffeb',
      main: '#1de9b6',
      dark: '#00bfa5',
      contrastText: '#333',
    },
  },
  typography: {
    fontFamily: ['Noto Sans', 'sans-serif'].join(','),
    fontSize: 12,
    h1: {
      fontSize: '1.75rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
    h3: {
      fontSize: '1.25rem',
    },
    h4: {
      fontSize: '1.125rem',
    },
    h5: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '1rem',
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
