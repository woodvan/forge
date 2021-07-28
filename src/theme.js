import { createTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: [
      'SF UI Display Semibold'
    ].join(','),
  },

  palette: {
    primary: {
      main: "#48D4BF",
      light: "#48D4BF",
      dark: "#48D4BF"
    },
    secondary: {
      main: "#B4B4B4",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800"
    },
    info: {
      main: "#2196f3"
    },
    success: {
      main: "#4caf50"
    }
  },

  overrides: {
    MuiButton: {
      root: {
        padding: '13px 64px'
      },
      label: {
        fontSize: 14,
        fontWeight: 500,
        color: 'white',
        textTransform: 'none',
      }
    }
  }
});

export default theme;
