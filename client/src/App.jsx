import React from "react";
import LandingPage from "./pages/landing-page/LandingPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// components
import StaffSidebar from "./components/staff-sidebar/StaffSidebar";
import UserSidebar from "./components/user-sidebar/UserSidebar";

//// pages ////
// login
import Login from "./pages/login/login";
// account management
import Users from "./pages/acct-management/user/Users";
import Staff from "./pages/acct-management/staff/Staff";
// itinerary
import Locations from "./pages/itinerary-staff/Locations";
import Attractions from "./pages/itinerary-staff/Attractions";
import EditLocations from "./pages/itinerary-staff/EditLocations";
import AddLocations from "./pages/itinerary-staff/AddLocations";
import EditAttractions from "./pages/itinerary-staff/EditAttractions";
import AddAttraction from "./pages/itinerary-staff/AddAttraction";

// error
import Error from "./components/Error";

// layouts
import UserItinerary from "./layouts/UserItinerary";
import StaffItinerary from "./layouts/Itinerary";
import Profiles from "./layouts/Profiles";

import Map from "./pages/itinerary-user/Map";
import Directions from "./pages/itinerary-user/Directions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="user" element={<UserSidebar />}>
        <Route path="itinerary" element={<UserItinerary />}></Route>
      </Route>
      <Route path="user/itinerary/map" element={<Map />} />
      <Route path="user/itinerary/directions" element={<Directions />} />

      <Route path="staff" element={<StaffSidebar />}>
        <Route path="itinerary" element={<StaffItinerary />}>
          <Route path="locations" element={<Locations />} />
          <Route path="attractions" element={<Attractions />} />
        </Route>
        <Route path="itinerary/locations/:id" element={<EditLocations />} />
        <Route path="itinerary/locations/add" element={<AddLocations />} />
        <Route path="itinerary/attractions/:id" element={<EditAttractions />} />
        <Route path="itinerary/attractions/add" element={<AddAttraction />} />

        <Route path="profiles" element={<Profiles />}>
          <Route path="users" element={<Users />}></Route>
          <Route path="staff" element={<Staff />}></Route>
        </Route>
      </Route>
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <div className="w-full min-h-screen bg-seashell dark:bg-grey p-0 m-0">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
