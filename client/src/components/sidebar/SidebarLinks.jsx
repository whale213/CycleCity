import React from "react";
import { adminIcons } from "./Icons";
import { Link } from "react-router-dom";

const SidebarLinks = ({ toggle }) => {
  return (
    <div className="">
      {adminIcons.map((data) => {
        return (
          <Link to={data.href}>
            <div
              className={`${
                toggle ? "last:w-[3.6rem]" : "last:w-[14rem]"
              } sidebar left-4 bottom-4`} // last:absolute
              key={data.id}
            >
              <div className="mr-8 text-[1.7rem] text-seashell">
                {data.icon}
              </div>
              <div
                className={`${
                  toggle ? "opacity-0 delay-200" : ""
                } text-[1rem] text-seashell whitespace-pre`}
              >
                {data.text}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarLinks;
