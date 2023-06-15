import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/landing-page/LandingPage";

function App() {
  return (
    <div className="w-full h-screen bg-grey">
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
