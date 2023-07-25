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
import Locations from "./pages/itinerary-staff/Locations";
import Attractions from "./pages/itinerary-staff/Attractions";
import Posts from "./pages/social-media/Posts";


// layouts
import Itinerary from "./layouts/Itinerary";
import Comments from "./pages/social-media/Comments";
import AddPost from "./pages/social-media/AddPost";


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
          <Route path="locations" element={<Locations />}></Route>
          <Route path="attractions" element={<Attractions />}></Route>
        </Route>
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
