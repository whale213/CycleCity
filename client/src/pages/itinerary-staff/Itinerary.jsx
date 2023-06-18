import React from "react";
import { Link, Outlet } from "react-router-dom";

function Itinerary() {
  return (
    <>
      <div className="flex gap-4 flex-1">
        <Link to="/itinerary/locations">Locations</Link>
        <Link to="/itinerary/attractions">Attractions</Link>
      </div>
      <Outlet />
    </>
  );
}

export default Itinerary;
