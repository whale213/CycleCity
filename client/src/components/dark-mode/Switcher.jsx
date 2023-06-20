import React, { useState } from "react";
import useDarkSide from "./useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div className="m-16 flex flex-col items-center">
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={50}
        />
        <h3 className="text-gray-800 dark:text-gray-300 pt-4">
          {colorTheme === "light" ? "Dark Mode" : "Light Mode"}
        </h3>
      </div>
    </>
  );
}
