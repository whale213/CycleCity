import React from "react";
import LandingPage from "./pages/landing-page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import Login from "./pages/login/login";

function App() {
  return (
    <div className="w-full h-screen bg-grey">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user" element={<Sidebar />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
