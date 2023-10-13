import React, { useState, useEffect } from "react";
import axios from "axios";

const Mission = ({ mission }) => (
  <div className="mission">
    <p>{mission.name}</p>
    <p>Status: {mission.completed ? "Completed" : "Not Completed"}</p>
  </div>
);

const MissionList = () => {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    axios
      .get("/api/missions")
      .then((response) => {
        setMissions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Mission List</h1>
      {missions.map((mission) => (
        <Mission key={mission.id} mission={mission} />
      ))}
    </div>
  );
};

export default MissionList;
