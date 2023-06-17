import React from "react";
import user from "../../assets/user.jpg";

const UserProfile = ({ toggle }) => {
  return (
    <div
      className={`flex gap-6 items-center mt-2 ${
        //mt-4 is a temporary solution for margin between user profile and last sidebar item
        toggle
          ? "bg-none transition-all duration-300 delay-200"
          : "bg-lightGrey rounded-xl p-2 flex items-center"
      }`}
    >
      <div className="min-w-[3.5rem] h-[3.5rem]">
        <img
          src={user}
          alt=""
          className="w-full h-full rounded-xl object-cover"
        />
      </div>
      <div className={toggle ? "opacity-0 delay-200" : ""}>
        <h3 className="text-xl text-seashell">John Doe</h3>
        {/* <span className="text-[0.75rem] opacity-60 text-seashell">
          user12345@gmail.com
        </span> */}
      </div>
    </div>
  );
};

export default UserProfile;
