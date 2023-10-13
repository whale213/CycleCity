import React from "react";
import { Link } from "react-router-dom";
import DarkModeLogo from "../../assets/logoDarkMode.png";
import LightModeLogo from "../../assets/logoLightMode.png";
import Toggle from "../../components/dark-mode/Toggle";
import { SlMenu } from "react-icons/sl";

export default function Navbar() {
  return (
    <header>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a href="/">
              <img src={DarkModeLogo} alt="CycleCity" className="w-20 h-20" />
            </a>
          </div>
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm text-grey dark:text-seashell">
                <li>
                  <a
                    className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-ultraViolet dark:before:bg-thistle before:transition hover:before:scale-100"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-ultraViolet dark:before:bg-thistle before:transition hover:before:scale-100"
                    href="/"
                  >
                    Locations
                  </a>
                </li>

                <li>
                  <a
                    className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-ultraViolet dark:before:bg-thistle before:transition hover:before:scale-100"
                    href="/"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-ultraViolet dark:before:bg-thistle before:transition hover:before:scale-100"
                    href="/"
                  >
                    Users
                  </a>
                </li>
                <li>
                  <a
                    className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-ultraViolet dark:before:bg-thistle before:transition hover:before:scale-100"
                    href="/"
                  >
                    Achievements
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex mt-4 pr-2">
              <Toggle />
            </div>
            <div className="sm:flex sm:gap-4">
              <div className="hidden sm:flex">
                <Link
                  to="/login"
                  className="py-2.5 px-5 bg-thistle text-grey dark:hover:text-seashell border border-thistle rounded-lg hover:bg-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                >
                  Login
                </Link>
              </div>
              <div className="hidden sm:flex">
                <Link
                  to="/register"
                  className="py-2.5 px-5 bg-transparent text-grey dark:text-seashell border border-ultraViolet rounded-lg hover:bg-ultraViolet hover:text-seashell hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                >
                  Register
                </Link>
              </div>
            </div>
            <div className="block md:hidden">
              <button className="rounded bg-grey p-2 text-seashell transition border border-transparent hover:bg-transparent hover:border-grey hover:text-grey dark:hover:border-seashell dark:hover:bg-transparent dark:text-grey dark:bg-seashell dark:hover:text-seashell">
                <SlMenu />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
