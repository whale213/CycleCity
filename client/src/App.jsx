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
// social media
import Posts from "./pages/social-media/Posts";
import Comments from "./pages/social-media/Comments";
import AddPost from "./pages/social-media/AddPost";
// error
import Error from "./components/Error";

// layouts
import Itinerary from "./layouts/Itinerary";
import Profiles from "./layouts/Profiles";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="user" element={<UserSidebar />}>
        <Route path = "comments/:id" element={<Comments />} />
        <Route path = "addpost" element = {<AddPost />} />
        <Route path = "userpost" element={<Posts />} />
        
          

      </Route>
      <Route path="staff" element={<StaffSidebar />}>
        <Route path="itinerary" element={<Itinerary />}>
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
