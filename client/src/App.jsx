import React from "react";
import LandingPage from "./pages/landing-page/LandingPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// pages
import StaffSidebar from "./components/staff-sidebar/StaffSidebar";
import UserSidebar from "./components/user-sidebar/UserSidebar";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Locations from "./pages/itinerary-staff/Locations";
import Attractions from "./pages/itinerary-staff/Attractions";
import Users from "./pages/acct-management/Users";
import Staff from "./pages/acct-management/Staff";
import EditLocations from "./pages/itinerary-staff/EditLocations";
import EditAttractions from "./pages/itinerary-staff/EditAttractions";
import Error from "./components/Error";

// layouts
import Itinerary from "./layouts/Itinerary";
import Profiles from "./layouts/Profiles";
import EditStaffs from "./pages/acct-management/EditStaff";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="user" element={<UserSidebar />}></Route>
      <Route path="staff" element={<StaffSidebar />}>
        <Route path="itinerary" element={<Itinerary />}>
          <Route path="locations" element={<Locations />} />
          <Route path="attractions" element={<Attractions />} />
        </Route>
        <Route path="itinerary/locations/:id" element={<EditLocations />} />
        <Route path="itinerary/attractions/:id" element={<EditAttractions />} />

        <Route path="profiles" element={<Profiles />}>
          <Route path="users" element={<Users />}></Route>
          <Route path="staff" element={<Staff />}></Route>
          <Route path="profiles/staff/:id" element={<EditStaffs />} />
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
