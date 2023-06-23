import { useEffect, useRef, useState } from "react";
import { TabsData } from "./TabsData";

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

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div className="text-grey dark:text-seashell m-10">
      <h1 className="text-3xl m-4">Itinerary</h1>
      <div className="relative">
        <div className="flex space-x-6 sm:space-x-8 md:space-x-10">
          {TabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className="pt-2 pb-3"
                onClick={() => setActiveTabIndex(idx)}
              >
                <div className="px-6">
                  <div className="flex flex-row">
                    <p className="px-2">{tab.icon}</p>
                    <p>{tab.label}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        <span
          className="absolute bottom-0 block rounded h-[3px] bg-pink-200 transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="py-4">
        <p>{TabsData[activeTabIndex].content}</p>
      </div>
    </div>
  );
}
