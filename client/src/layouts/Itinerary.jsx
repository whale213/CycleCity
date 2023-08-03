import React from "react";
import Tabs from "../pages/itinerary-staff/Tabs";

export default function Itinerary() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div className="h-full w-full text-grey dark:text-seashell">
      <Tabs />
    </div>
  );
}
