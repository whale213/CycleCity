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
import Users from "./pages/acct-management/user/Users";
import UsersStaff from "./pages/acct-management/user-staff/UsersStaff";
import EditLocations from "./pages/itinerary-staff/EditLocations";
import EditAttractions from "./pages/itinerary-staff/EditAttractions";
import Error from "./components/Error";
import Peloton from "./pages/peloton/Peloton";
import PelotonStaff from "./pages/peloton/PelotonStaff";
import AddPeloton from "./pages/peloton/AddPeloton";
import EditPeloton from "./pages/peloton/EditPeloton";
import AddPelotonStaff from "./pages/peloton/AddPelotonStaff";
import EditPelotonStaff from "./pages/peloton/EditPelotonStaff";

// layouts
import Itinerary from "./layouts/Itinerary";
import Profiles from "./layouts/Profiles";
import PelotonJoin from "./pages/peloton/PelotonJoin";
import PelotonsList from "./pages/peloton/PelotonsList";
import PelotonsListStaff from "./pages/peloton/PelotonsListStaff";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="user" element={<UserSidebar />}>
        <Route path="peloton" element={<Peloton />}>
          <Route path="add" element={<AddPeloton />}></Route>
          <Route path="edit/:id" element={<EditPeloton />}></Route>
          <Route path="join" element={<PelotonJoin />}></Route>
          <Route path="list" element={<PelotonsList />}></Route>
        </Route>
      </Route>
      <Route path="staff" element={<StaffSidebar />}>
        <Route path="peloton" element={<PelotonStaff />}>
          <Route path="add" element={<AddPelotonStaff />}></Route>
          <Route path="edit/:id" element={<EditPelotonStaff />}></Route>
          <Route path="list" element={<PelotonsListStaff />}></Route>
        </Route>
      </Route>
      <Route path="staff" element={<StaffSidebar />}>
        <Route path="itinerary" element={<Itinerary />}>
          <Route path="locations" element={<Locations />} />
          <Route path="attractions" element={<Attractions />} />
        </Route>
        <Route path="itinerary/locations/:id" element={<EditLocations />} />
        <Route path="itinerary/attractions/:id" element={<EditAttractions />} />
      </Route>
      <Route path="profiles" element={<Profiles />}>
        <Route path="users" element={<Users />}></Route>
        <Route path="staff" element={<UsersStaff />}></Route>
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
