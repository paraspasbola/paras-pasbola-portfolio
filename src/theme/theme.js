import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    background: {
      default: "#070B14",
      paper: "#0D1321",
    },

    primary: {
      main: "#3B82F6",
      light: "#60A5FA",
      dark: "#2563EB",
    },

    secondary: {
      main: "#8B5CF6",
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#94A3B8",
    },

    divider: "rgba(255, 255, 255, 0.08)",
  },

  typography: {
    fontFamily: '"Figtree", sans-serif',

    h1: {
      fontFamily: '"Figtree", sans-serif',
    },

    h2: {
      fontFamily: '"Figtree", sans-serif',
    },

    h3: {
      fontFamily: '"Figtree", sans-serif',
    },

    h4: {
      fontFamily: '"Figtree", sans-serif',
    },

    h5: {
      fontFamily: '"Figtree", sans-serif',
    },

    h6: {
      fontFamily: '"Figtree", sans-serif',
    },

    body1: {
      fontFamily: '"Figtree", sans-serif',
    },

    body2: {
      fontFamily: '"Figtree", sans-serif',
    },

    button: {
      fontFamily: '"Figtree", sans-serif',
    },
  },

  // typography: {
  //   fontFamily: [
  //     "Inter",
  //     "Roboto",
  //     "Arial",
  //     "sans-serif",
  //   ].join(","),
  // },

  shape: {
    borderRadius: 14,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid rgba(255,255,255,0.08)",
        },
      },
    },
  },
});

export default theme;