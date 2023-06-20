import React from "react";

export default function Attractions() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div className="text-grey dark:text-seashell m-10 divide-y-4 divide-dotted hover:divide-dashed divide-ultraViolet">
      <h1 className="text-2xl mb-4">Attractions</h1>
      <div
        className="mt-6 first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-grey dark:first-letter:text-seashell
  first-letter:mr-3 first-letter:float-left"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt
        iste reiciendis exercitationem sapiente perspiciatis explicabo eligendi
        et. Sit exercitationem rem laboriosam veniam nisi laborum at nam iste
        officia consequuntur. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Earum cupiditate fuga temporibus distinctio dicta ex
        aliquid. Impedit sapiente temporibus quaerat provident, veritatis
        corrupti quasi ea officiis voluptas libero itaque tempora.
      </div>
    </div>
  );
}
