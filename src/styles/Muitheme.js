import { createTheme } from "@mui/material";
import { enUS } from "@mui/material/locale";
export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#121318",
    },
    background: {
      default: "#292E34",
      paper: "#121318",
    },
  },
  enUS,
});

export const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#F1F2F4",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F1F2F4",
    },
  },
  enUS,
});
