import { createTheme } from "@mui/material";

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      main: "var(--orange-500)",
      light: "var(--orange-300)",
      dark: "var(--orange-700)",
      contrastText: "var(--white)",
    },
    secondary: {
      main: "var(--slate-200)",
      light: "var(--slate-100)",
      dark: "var(--slate-300)",
      contrastText: "var(--slate-900)",
    },
    background: {
      default: "var(--slate-25)",
    },
  },
  typography: {
    fontFamily: "var(--fontFamily)",
    button: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 700,
      textTransform: "none",
    },
    h1: {
      fontSize: "40px",
      lineHeight: "48px",
      fontWeight: 900,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "32px",
      lineHeight: "40px",
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: "28px",
      lineHeight: "36px",
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: 700,
    },
    h5: {
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: 700,
    },
    h6: {
      fontSize: "18px",
      lineHeight: "26px",
      fontWeight: 700,
    },
  },
});

export default theme;
