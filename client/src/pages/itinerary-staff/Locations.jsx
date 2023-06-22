import React, { useState, useEffect } from "react";
import http from "../../http";

export default function Locations() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const [locationList, setLocationList] = useState([]);

  const getLocations = () => {
    http.get("/location").then((res) => {
      setLocationList(res.data);
    });
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <div className="text-grey dark:text-seashell m-10">
      <h1 className="text-2xl mb-4">Attractions</h1>
      <hr />
      <div className="divide-y-2 divide-pink-300">
        {locationList.map((location) => (
          <div key={location.locationId}>
            <p>{location.locationId}</p>
            <p>{location.name}</p>
            <p>{location.postalCode}</p>
            <p>{location.address}</p>
            <p>{location.longitude}</p>
            <p>{location.latitude}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
