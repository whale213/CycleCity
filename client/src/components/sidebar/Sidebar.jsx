import React from "react";
import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import SidebarLinks from "./SidebarLinks";
import UserProfile from "./userProfile";
import logo from "../../assets/logoDarkMode.png";

const Sidebar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className={`${toggle ? "w-[5.8rem]" : ""} sidebar-container`}>
      <div className="min-w-[3.5rem] h-[3.5rem]">
        <img
          src={logo}
          alt=""
          className="w-full h-full rounded-full object-cover border"
          //to do: change the profile picture
          //rounded-full: to make the enlarged logo less weird
          //object-cover: to ensure the the logo is not stretched when enlarged
        />
      </div>
      <div class="relative flex items-center py-5">
        <div class="flex-grow border-t-4 border-lightGrey rounded-lg"></div>
      </div>
      <SidebarLinks toggle={toggle} />
      <UserProfile toggle={toggle} />
      <div
        className="absolute top-[7rem] flex justify-center items-center -left-5 w-10 h-10 bg-glass rounded-full cursor-pointer invisible sm:visible"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <BiChevronLeft
          className={`${
            toggle ? "rotate-180" : ""
          } text-3xl transition-all duration-300`}
          color="seashell"
        />
      </div>
    </div>
  );
};

export default Sidebar;