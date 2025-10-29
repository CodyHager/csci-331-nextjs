"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00c72b",
      contrastText: "#0b0b0b",
    },
    secondary: {
      main: "#0cccfc",
      contrastText: "#0b0b0b",
    },
    background: {
      default: "#050505ff",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#ffffff",
      secondary: "#cccccc",
    },
  },
  typography: {
    fontFamily: "var(--font-roboto), Arial, sans-serif",
    h1: {
      fontWeight: 700,
      color: "#00c72bff",
    },
    h2: {
      fontWeight: 200,
      color: "#00c72bff",
    },
    h3: {
      fontWeight: 200,
      color: "#00c72bff",
    },
    h4: {
      fontWeight: 200,
      color: "#ebebebff",
    },
    h5: {
      fontWeight: 200,
      color: "#ebebebff",
    },
  },
  components: {
    // MuiLink: {
    //   styleOverrides: {
    //     root: {
    //       color: "inherit",
    //       textDecoration: "none",
    //     },
    //   },
    // },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
