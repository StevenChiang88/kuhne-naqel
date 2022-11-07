import { createContext } from "react";

const ThemeContext = createContext({
  ThemeHandler: () => {},
  muiTheme: "",
});

export default ThemeContext;
