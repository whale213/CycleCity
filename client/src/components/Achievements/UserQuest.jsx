import React, { useState, useEffect } from "react";
import axios from "axios";
import { GiTiedScroll } from "react-icons/gi";

const QuestDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [quests, setQuests] = useState([]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    // Fetch quests from your backend API
    axios
      .get("/api/quests")
      .then((response) => {
        // Shuffle the quests array randomly
        const shuffledQuests = response.data.sort(() => 0.5 - Math.random());
        // Get the first three quests
        const randomThreeQuests = shuffledQuests.slice(0, 3);
        setQuests(randomThreeQuests);
      })
      .catch((error) => {
        console.error("Error fetching quests:", error);
      });
  }, []);

  return (
    <div className="relative">
      <button
        className="rounded-full bg-indigo-600 text-white p-3 hover:bg-indigo-500 focus:outline-none"
        onClick={toggleDropdown}
      >
        Show Quests
      </button>

      {showDropdown && (
        <div className="absolute top-10 right-0 z-10 w-56 bg-white border border-gray-300 shadow-lg">
          <ul>
            {quests.map((quest) => (
              <li key={quest.questId} className="p-3 hover:bg-gray-100">
                <a href={`/quests/${quest.questId}`} className="text-gray-700">
                  {quest.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuestDropdown;
