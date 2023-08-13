import React from "react";
import { useState, useEffect } from "react";
import LandingPage from "./pages/landing-page/LandingPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import UserContext from "./context/UserContext";
import http from "./http";

// pages
import StaffSidebar from "./components/staff-sidebar/StaffSidebar";
import UserSidebar from "./components/user-sidebar/UserSidebar";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Locations from "./pages/itinerary-staff/Locations";
import Attractions from "./pages/itinerary-staff/Attractions";
import Users from "./pages/acct-management/Users";
import ViewUser from "./pages/acct-management/ViewUser";
import Staff from "./pages/acct-management/Staff";
import EditStaff from "./pages/acct-management/EditStaff";
import EditLocations from "./pages/itinerary-staff/EditLocations";
import EditAttractions from "./pages/itinerary-staff/EditAttractions";
import Error from "./components/Error";
import UserProfile from "./pages/acct-management/UserProfile";
import UserEditProfile from "./pages/acct-management/UserEditProfile";

// layouts
import Itinerary from "./layouts/Itinerary";
import Profiles from "./layouts/Profiles";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      <Route path="user" element={<UserSidebar />}>
        <Route path="profile" element={<UserProfile />} />
        <Route path="profile/edit" element={<UserEditProfile />} />
      </Route>

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
        </Route>
        <Route path="profiles/staff/:id" element={<EditStaff />} />
        <Route path="profiles/users/:id" element={<ViewUser />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      http.get("/user/auth").then((res) => {
        setUser(res.data.user);
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="w-full min-h-screen bg-seashell dark:bg-grey p-0 m-0">
        <RouterProvider router={router} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
