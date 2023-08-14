import { TabsData } from "./PelotonTabsDataStaff";
import { NavLink, Outlet } from "react-router-dom";

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
      <div className="text-grey dark:text-seashell m-8">
        <h1 className="text-2xl text-ultraViolet dark:text-thistle m-2 flex">
          Peloton
        </h1>
        <div className="relative">
          <div className="flex sm:space-x-4 md:space-x-8 p-2 pl-4 transition">
            {TabsData.map((tab) => {
              return (
                <>
                  <NavLink
                    to={tab.href}
                    className={
                      "dark:[&.active]:text-thistle shadow-xl rounded-lg [&.active]:bg-onyx"
                    }
                  >
                    <button className="flex flex-row hover:bg-orange-100 dark:hover:bg-fedora py-2 px-2 rounded-lg">
                      <p className="px-2">{tab.icon}</p>
                      <p className="pr-2">{tab.label}</p>
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
