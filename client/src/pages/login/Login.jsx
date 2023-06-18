import React from "react";

const Login = () => {
  return (
    <>
      <div className="w-full h-screen grid grid-rows-2 justify-items-center">
        <h1 className="text-5xl text-seashell mt-40">Login</h1>
        <div>
          <div className="flex gap-4">
            <div className="flex">
              <a
                className="py-2.5 px-5 bg-thistle text-grey hover:text-seashell border border-thistle rounded-lg hover:bg-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                href="/staff"
              >
                Login
              </a>
            </div>
            <div className="flex">
              <a
                className="py-2.5 px-5 bg-transparent text-seashell border border-ultraViolet rounded-lg hover:bg-ultraViolet hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                href="/staff"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
