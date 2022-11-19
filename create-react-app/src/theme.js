import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#3070B3',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#D95117'
    },
    success: {
      main: '#7D922A'
    },
  },
});

export default theme;
