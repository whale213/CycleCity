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

// components
import StaffSidebar from "./components/staff-sidebar/StaffSidebar";
import UserSidebar from "./components/user-sidebar/UserSidebar";

//// pages ////
// login
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
// account management
import Users from "./pages/acct-management/Users";
import ViewUser from "./pages/acct-management/ViewUser";
import Staff from "./pages/acct-management/Staff";
import EditStaff from "./pages/acct-management/EditStaff";
import UserProfile from "./pages/acct-management/UserProfile";
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
import EditPost from "./pages/social-media/EditPost";
import PostProfile from "./pages/social-media/PostProfile";

//Spotify
import SpotifyHome from "./pages/Spotify/SpotifyHome";
// import SpotifyLibrary from "./pages/Spotify/SpotifyLibrary";

// achievements
import Quests from "./pages/achievements-staff/Quests";
import Missions from "./pages/achievements-staff/Missions";
import Criterias from "./pages/achievements-staff/Criterias";
import Leagues from "./pages/achievements-staff/Leagues";
import AddQuests from "./pages/achievements-staff/AddQuests";
import EditQuests from "./pages/achievements-staff/EditQuests";
import AddMissions from "./pages/achievements-staff/AddMissions";
import EditMissions from "./pages/achievements-staff/EditMissions";
import AddCriterias from "./pages/achievements-staff/AddCriterias";
import EditCriterias from "./pages/achievements-staff/EditCriterias";
import AddLeagues from "./pages/achievements-staff/AddLeagues";
import EditLeagues from "./pages/achievements-staff/EditLeagues";

// error
import Error from "./components/Error";

// layouts
import Itinerary from "./layouts/Itinerary";
import Profiles from "./layouts/Profiles";
import Achievements from "./layouts/Achievements";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      <Route path="user" element={<UserSidebar />}>
        // user profile
        <Route path="profile" element={<UserProfile />} />
        <Route path="profile/edit" element={<UserEditProfile />} />

        // social media
        <Route path="comments/:id" element={<Comments />} />
        <Route path="addpost" element={<AddPost />} />
        <Route path="editpost/:id" element={<EditPost />} />
        <Route path="userpost" element={<Posts />} />
        <Route path="postprofile/:id" element={<PostProfile />} />

        {/* spotify */}
        <Route path="spotify" element={<SpotifyHome />}></Route>
        {/* <Route path="library" element={<SpotifyLibrary />} /> */}
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

        <Route path="achievements" element={<Achievements />}>
          <Route path="quests" element={<Quests />} />
          <Route path="missions" element={<Missions />} />
          <Route path="criterias" element={<Criterias />} />
          <Route path="leagues" element={<Leagues />} />
        </Route>
        <Route path="achievements/AddQuests" element={<AddQuests />} />
        <Route path="achievements/AddMissions" element={<AddMissions />} />
        <Route path="achievements/AddCriterias" element={<AddCriterias />} />
        <Route path="achievements/AddLeagues" element={<AddLeagues />} />
        <Route path="achievements/EditQuests/:id" element={<EditQuests />} />
        <Route
          path="achievements/EditMissions/:id"
          element={<EditMissions />}
        />
        <Route
          path="achievements/EditCriterias/:id"
          element={<EditCriterias />}
        />
        <Route path="achievements/EditLeagues/:id" element={<EditLeagues />} />

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
