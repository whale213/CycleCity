import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../http";

export default function Itinerary() {
  const [locationList, setLocationList] = useState([]);
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const getLocations = () => {
    http.get("/location").then((res) => {
      setLocationList(res.data);
    });
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <div className="flex justify-content m-1">
      <div className="w-[76vw] sm:w-[80vw] md:w-[84vw] lg:w-[88vw] xl:w-[90vw] h-[96vh] p-4 text-grey dark:text-seashell overflow-auto">
        <Link to="/user/itinerary/map">
          <div className="w-full h-1/2 border-4 border-thistle rounded-lg flex items-center justify-center hover:bg-fedora text-3xl">
            Map
          </div>
        </Link>
        <div className="w-full h-1/2 mt-8 border-2 border-thistle rounded-lg flex items-center justify-center hover:bg-fedora text-xl">
          Slider Component Here
        </div>
      </div>
    </div>
  );
}
