import React from "react";

export default function Tagline() {
  return (
    // m-36 initially before adding dark mode toggle
    <div className="mx-auto max-w-lg text-center m-4 mb-60 text-transparent bg-clip-text bg-gradient-to-tr from-indigo-300 to-purple-400">
      <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">Cycle City</h2>
      <p className="mt-4 font-semibold">Where every ride is an adventure!</p>
    </div>
  );
}
