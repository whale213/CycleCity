import { TabsData } from "./TabsData";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Tabs() {
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
    <>
      <div className="text-grey dark:text-seashell m-10">
        <h1 className="text-2xl text-ultraViolet dark:text-thistle m-2 flex">
          Itinerary
        </h1>
        <div className="relative">
          <div className="flex sm:space-x-4 md:space-x-8">
            {TabsData.map((tab) => {
              return (
                <>
                  <NavLink to={tab.href}>
                    <button className="pt-2">
                      <div className="px-2">
                        <div className="flex flex-row hover:bg-fedora py-2 px-2 rounded-lg">
                          <p className="px-2">{tab.icon}</p>
                          <p className="pr-2">{tab.label}</p>
                        </div>
                      </div>
                    </button>
                  </NavLink>
                </>
              );
            })}
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
