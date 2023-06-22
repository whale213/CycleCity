import React, { useState, useEffect } from "react";
import http from "../../http";

export default function Attractions() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const [attractionList, setAttractionList] = useState([]);

  const getAttractions = () => {
    http.get("/attraction").then((res) => {
      setAttractionList(res.data);
    });
  };

  useEffect(() => {
    getAttractions();
  }, []);

  return (
    <div className="text-grey dark:text-seashell m-10">
      <h1 className="text-2xl mb-4">Attractions</h1>
      <hr />
      <div className="divide-y-2 divide-pink-300">
        {attractionList.map((attraction) => (
          <div key={attraction.attractionId}>
            <p>{attraction.attractionId}</p>
            <p>{attraction.distance}</p>
            <p>{attraction.difficulty}</p>
            <p>{attraction.imageFile}</p>
            <p>{attraction.locationId}</p>
            <p>{attraction.location.name}</p>
            <p>{attraction.location.postalCode}</p>
            <p>{attraction.location.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
