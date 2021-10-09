import React from "react";
import { useTheme, useUpateThemeContext } from "./ThemeContext";

export default function MyFuncComponent() {
  const theme = useTheme();
  const update = useUpateThemeContext();

  const themeStyle = {
    backgroundColor: theme ? "#333" : "#CCC",
    color: theme ? "#CCC" : "#333",
  };

  return (
      <>
        <button onClick={update}>Toggle Theme</button>
        <div style={themeStyle} >My Function Component</div>
      </>
  )
}
