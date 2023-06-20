import React from "react";
import Switcher from "../../components/dark-mode/Switcher";

export default function Theme() {
  return (
    <div className="flex flex-col items-center transition duration-200">
      <Switcher />
    </div>
  );
}
