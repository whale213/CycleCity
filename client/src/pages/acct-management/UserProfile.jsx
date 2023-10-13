import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { FiEdit } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import Modal from "../../components/modal/Modal";
import { BsExclamationCircle } from "react-icons/bs";
import http from "../../http";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

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

  const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility
  const navigate = useNavigate();

  const [idToDelete, setIdToDelete] = useState(0);
  const [nameToDelete, setNameToDelete] = useState("");

  const deleteAccount = () => {
    http.delete(`/user/${user.id}`).then((res) => {
      console.log(res.data);
      navigate("/");
    });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  const logout = () => {
    localStorage.clear();
    window.location = "/";
    window.alert("Logging out...");
  };

  return (
    <div className="flex flex-col mt-0 shadow-lg h-screen overflow-y-auto">
      {user ? (
        <div className="w-full p-8">
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
            <div className="w-full border-2 border-fedora text-silver m-10 p-20">
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

          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div style={{ marginTop: "10px", marginLeft: "40px" }}>
            <button
              onClick={logout}
              className="flex items-center py-2.5 px-8 bg-warning text-seashell hover:text-grey dark:hover:text-warning border-2 border-transparent rounded-lg hover:bg-transparent hover:border-warning transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
            >
              <BiLogOut size={20} className="mr-2" />
              <a>Log Out</a>
            </button>
          </div>

          <br></br>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>

          <div style={{ marginTop: "10px", marginLeft: "40px" }}>
            <button
              onClick={(event) => {
                event.stopPropagation();
                setIdToDelete(user.userId);
                setNameToDelete(user.name);
                setModalOpen(true);
              }}
              className="flex items-center py-2.5 px-2 bg-warning text-seashell hover:text-grey dark:hover:text-warning border-2 border-transparent rounded-lg hover:bg-transparent hover:border-warning transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
            >
              <MdDeleteForever size={20} className="mr-2" />
              Delete Account
            </button>
          </div>

          <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <div className="text-center w-96">
              <BsExclamationCircle size={50} className="mx-auto text-warning" />
              <div className="mx-auto my-4 w-60">
                <h3 className="text-lg text-grey dark:text-seashell">
                  Delete Account
                </h3>
                <div className="text-sm text-gray-400 mt-4">
                  <p>
                    Are you sure you want to delete your account {nameToDelete}?{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 w-96 text-seashell dark:text-grey">
                <button
                  onClick={() => setModalOpen(false)}
                  className="border border-fedora hover:bg-fedora text-grey dark:text-seashell hover:text-seashell w-full rounded-lg p-1"
                >
                  Cancel
                </button>
                <button
                  onClick={() => deleteAccount()}
                  className="bg-warning hover:bg-transparent border border-transparent hover:border-warning hover:text-warning dark:text-seashell dark:hover:text-warning w-full rounded-lg p-1"
                >
                  Delete
                </button>
              </div>
            </div>
          </Modal>
        </div>
      ) : (
        <div>hi ms li</div>
      )}
    </div>
  );
}
