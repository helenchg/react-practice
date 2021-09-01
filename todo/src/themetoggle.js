// Implementing Dark Mode using styled components which allow for the creation of global styles elements to be shared between components. Reference: https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/
// Created on Aug 31, 2021
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/globalStyles";
import { lightTheme, darkTheme } from "./theme/Themes";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("Light");

  // function to toggle theme state between light or dark.
  const themeToggler = () => {
    theme === "Light" ? setTheme("Dark") : setTheme("Light");
  };

  return (
    <ThemeProvider theme={theme === "Light" ? lightTheme : darkTheme}>
      <div>
        <GlobalStyles />
        <button id="changeColor" className="buttons" onClick={themeToggler}>
          {theme} Mode
        </button>
      </div>
    </ThemeProvider>
  );
}
