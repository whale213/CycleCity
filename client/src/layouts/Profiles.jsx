import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Profiles() {
  return (
    <>
      <div className="flex gap-4 flex-1">
        <div className="flex">
          <Link to="/staff/profiles/users">
            <a className="py-2.5 px-5 bg-thistle text-grey dark:hover:text-seashell border border-thistle rounded-lg hover:bg-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
              Users
            </a>
          </Link>
        </div>
        <div className="flex">
          <Link to="/staff/profiles/users">
            <a className="py-2.5 px-5 bg-ultraViolet text-seashell hover:text-grey dark:hover:text-seashell border border-transparent rounded-lg hover:bg-transparent hover:border-ultraViolet transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
              Staff
            </a>
          </Link>
        </div>
        {/* <div className="flex">
          <Link to="/staff/profiles/users">
            <a className="py-2.5 px-5 bg-thistle text-grey dark:hover:text-seashell border border-thistle rounded-lg hover:bg-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
              Tabs
            </a>
          </Link>
        </div> */}
      </div>
      <Outlet />
      <div className="m-10">
        <Link to="/staff">
          <a className="py-2.5 px-5 bg-transparent text-grey hover:text-seashell dark:text-seashell border border-ultraViolet rounded-lg hover:bg-ultraViolet hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
            Back
          </a>
        </Link>
      </div>
    </>
  );
}
