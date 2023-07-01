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
import Login from "./pages/login/login";
import Locations from "./pages/itinerary-staff/Locations";
import Attractions from "./pages/itinerary-staff/Attractions";
import Tabs from "./pages/itinerary-staff/Tabs";
import Users from "./pages/acct-management/user/Users";
import UsersStaff from "./pages/acct-management/user-staff/UsersStaff";

// layouts
import Itinerary from "./layouts/Itinerary";
import Profiles from "./layouts/Profiles";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="user" element={<UserSidebar />}></Route>
      <Route path="staff" element={<StaffSidebar />}>
        <Route path="itinerary" element={<Itinerary />}>
          <Route path="locations" element={<Locations />}></Route>
          <Route path="attractions" element={<Attractions />}></Route>
        </Route>
      </Route>
      <Route path="profiles" element={<Profiles />}>
        <Route path="users" element={<Users />}></Route>
        <Route path="staff" element={<UsersStaff />}></Route>
      </Route>
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
