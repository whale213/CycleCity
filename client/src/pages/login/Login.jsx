import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-full h-screen grid grid-rows-2 justify-items-center">
        <h1 className="text-5xl text-seashell mt-40">Login</h1>
        <div>
          <div className="flex gap-4">
            <div className="flex">
              <Link to="/staff">
                <a className="py-2.5 px-5 bg-thistle text-grey hover:text-seashell border border-thistle rounded-lg hover:bg-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                  Login
                </a>
              </Link>
            </div>
            <div className="flex">
              <Link to="/staff">
                <a className="py-2.5 px-5 bg-transparent text-seashell border border-ultraViolet rounded-lg hover:bg-ultraViolet hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                  Register
                </a>
              </Link>
            </div>
          </div>
          <div className="m-10">
            <Link to="/">
              <a className="py-2.5 px-5 bg-transparent text-seashell border border-ultraViolet rounded-lg hover:bg-ultraViolet hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                Back
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
