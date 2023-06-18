import React from "react";
import LandingPage from "./pages/landing-page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import Login from "./pages/login/login";
import Locations from "./pages/itinerary-staff/Locations";
import Attractions from "./pages/itinerary-staff/Attractions";
import Itinerary from "./pages/itinerary-staff/Itinerary";

function App() {
  return (
    <div className="w-full h-screen bg-grey">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="staff" element={<Sidebar />}>
            <Route path="itinerary" element={<Itinerary />}>
              <Route path="locations" element={<Locations />}></Route>
              <Route path="attractions" element={<Attractions />}></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
