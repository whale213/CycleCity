import React, { useState } from "react";
import useDarkMode from "./useDarkMode";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Toggle() {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkSide, setDarkMode] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={32}
        />
        <h3 className="text-grey text-sm dark:text-gray-300 pt-2">
          {colorTheme === "light" ? "Dark Mode" : "Light Mode"}
        </h3>
      </div>
    </>
  );
}
