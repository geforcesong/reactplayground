import React from "react";
import MyFuncComponent from "./MyFuncComponent";
import { ThemeProvider } from "./ThemeContext";

export default function ThemedComponent() {
  return (
    <>
      <ThemeProvider>
        <MyFuncComponent />
      </ThemeProvider>
    </>
  );
}
