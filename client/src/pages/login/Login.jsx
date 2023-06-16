import React from "react";

const Login = () => {
  return (
    <div class="flex items-center gap-4">
      <div class="sm:flex sm:gap-4">
        <div class="hidden sm:flex">
          <a
            class="py-2.5 px-5 bg-thistle text-grey hover:text-seashell border border-thistle rounded-lg hover:bg-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
            href="/user"
          >
            Login
          </a>
        </div>
        <div class="hidden sm:flex">
          <a
            class="py-2.5 px-5 bg-transparent text-seashell border border-ultraViolet rounded-lg hover:bg-ultraViolet hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
            href="/user"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
