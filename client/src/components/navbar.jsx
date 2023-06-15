import React from "react";
import logo from "../assets/logoDarkMode.png";
import { SlMenu } from "react-icons/sl";

export default function Navbar() {
  return (
    <header>
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="md:flex md:items-center md:gap-12">
            <a href="/">
              <img src={logo} alt="" className="w-20 h-20" />
            </a>
          </div>
          <div class="hidden md:block">
            <nav aria-label="Global">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <a
                    class="text-seashell relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-thistle before:transition hover:before:scale-100"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    class="text-seashell relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-thistle before:transition hover:before:scale-100"
                    href="/"
                  >
                    Locations
                  </a>
                </li>

                <li>
                  <a
                    class="text-seashell relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-thistle before:transition hover:before:scale-100"
                    href="/"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    class="text-seashell relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-thistle before:transition hover:before:scale-100"
                    href="/"
                  >
                    Users
                  </a>
                </li>
                <li>
                  <a
                    class="text-seashell relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-thistle before:transition hover:before:scale-100"
                    href="/"
                  >
                    Achievements
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="flex items-center gap-4">
            <div class="sm:flex sm:gap-4">
              <div class="hidden sm:flex">
                <a
                  class="py-2.5 px-5 bg-thistle text-grey hover:text-seashell border border-thistle rounded-lg hover:bg-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                  href="/"
                >
                  Login
                </a>
              </div>
              <div class="hidden sm:flex">
                <a
                  class="py-2.5 px-5 bg-transparent text-seashell border border-ultraViolet rounded-lg hover:bg-ultraViolet hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                  href="/"
                >
                  Register
                </a>
              </div>
            </div>
            <div class="block md:hidden">
              <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <SlMenu />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
