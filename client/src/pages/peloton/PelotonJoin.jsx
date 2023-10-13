import React from "react";

export default function PelotonJoin() {
  return (
    <div className="seashell">
      <div className="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row">
        <a
          className="inline-block w-auto min-w-[250px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-indigo-600 to-indigo-500 hover:bg-gradient-to-b dark:shadow-indigo-900 shadow-indigo-200 hover:shadow-2xl hover:shadow-indigo-400 hover:-translate-y-px "
          href=""
        >
          Create Peloton
        </a>
        <a
          className="inline-block w-auto min-w-[250px] px-6 py-4 text-white transition-all bg-gray-700 dark:bg-white dark:text-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white shadow-slate-300 dark:shadow-slate-700 hover:shadow-2xl hover:shadow-slate-400 hover:-translate-y-px"
          href=""
        >
          Join Peloton
        </a>
      </div>
    </div>
  );
}
