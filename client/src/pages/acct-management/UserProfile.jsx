import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

import { FiEdit } from "react-icons/fi";

export default function UserProfile() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const logout = () => {
    localStorage.clear();
    window.location = "/";
  };

  return (
    <div>
      {user ? (
        <div className="w-full h-full p-8 overflow-auto">
          <Link
            to={"/user"}
            className="p-4 text-md md:text-3xl text-thistle dark:text-thistle"
          >
            Profile
          </Link>
          <div className="w-full flex pr-48">
            <div className="w-full m-8 p-6">
              <img
                src="https://i.dailymail.co.uk/i/newpix/2018/03/16/10/4A3F00DA00000578-0-image-a-54_1521195755175.jpg"
                className="h-36 w-64 rounded-full object-cover"
              />
              <div className="w-full flex justify-center space-x-4 mt-4">
                <div className="text-blush">Rank</div>
                <div className="text-blue-500">XP</div>
              </div>
              <div className="w-full flex justify-center space-x-4 mt-4">
                <div className="text-blush">{user.rank}</div>
                <div className="text-blue-500">100</div>
              </div>
            </div>
            {/* DATA */}
            <div className="p-10 w-full">
              <div className="text-2xl text-thistle py-4">{user.name}</div>
              <div className="flex flex-col space-y-4">
                <div className="text-silver text-sm">{user.email}</div>
                <div className="text-silver text-sm">{user.phoneNumber}</div>
              </div>
            </div>
            {/* Quests */}
            <div className="p-4 pt-12">
              <Link to={"/user/profile/edit"}>
                <FiEdit size={20} color="white" />
              </Link>
            </div>
            <div className="w-full h-full border-2 border-fedora text-silver m-10 p-20">
              Quests
            </div>
          </div>
          {/* BIO */}
          <div className="p-2 pr-20 pl-12 divide-y-2 divide-fedora">
            <div className="text-2xl pt-8 pb-2 text-thistle">Bio</div>
            <div className="pt-2 text-white" style={{ maxWidth: "600px" }}>
              {user.bio}
            </div>
          </div>

          <div style={{ marginTop: "100px", marginLeft: "40px" }}>
            <button onClick={logout}>
              <a className="py-2.5 px-5 bg-warning text-seashell hover:text-grey dark:hover:text-warning border-2 border-transparent rounded-lg hover:bg-transparent hover:border-warning transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                Log Out
              </a>
            </button>
          </div>
        </div>
      ) : (
        <div>hi ms li</div>
      )}
    </div>
  );
}
