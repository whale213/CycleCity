import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Error() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const navigate = useNavigate();
  return (
    <div>
      <div class="grid grid-rows-2 justify-items-center h-screen px-4 place-content-center">
        <h1 class="tracking-widest text-3xl text-gray-500 uppercase mt-48">
          404 | Not Found
        </h1>
        <Link to={navigate(1)}>
          <a className="py-2.5 px-8 bg-transparent text-grey dark:text-seashell border border-ultraViolet rounded-lg hover:bg-ultraViolet hover:text-seashell hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
            Home
          </a>
        </Link>
      </div>
    </div>
  );
}
