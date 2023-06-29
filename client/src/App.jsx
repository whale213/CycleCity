import React from "react";
import LandingPage from "./pages/landing-page/LandingPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// pages
import Sidebar from "./components/sidebar/sidebar";
import Login from "./pages/login/login";
import Locations from "./pages/itinerary-staff/Locations";
import Attractions from "./pages/itinerary-staff/Attractions";

// layouts
import Itinerary from "./layouts/Itinerary";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="staff" element={<Sidebar />}>
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
