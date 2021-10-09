import React, { useContext, useState } from "react";

export const ThemeContext = React.createContext();
export const UpateThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useUpateThemeContext() {
  return useContext(UpateThemeContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <UpateThemeContext.Provider value={toggleTheme}>
        {children}
      </UpateThemeContext.Provider>
    </ThemeContext.Provider>
  );
}
