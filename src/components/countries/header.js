import React, { useState } from "react";

export default function CountryHeader({ updateTheme }) {
  const [themeText, setThemeText] = useState("Dark");
  const handleClick = (e) => {
    if (themeText === "Dark") {
      setThemeText("Light");
    } else {
      setThemeText("Dark");
    }
    updateTheme(themeText);
  };

  return (
    <div className="header">
      <span>Where in the world?</span>

      <div className="theme-link">
        <button onClick={handleClick}>
          {themeText}
        </button>
      </div>
    </div>
  );
}
