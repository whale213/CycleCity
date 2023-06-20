import React from "react";

export default function Locations() {
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
    <div className="text-grey dark:text-seashell m-10">
      <h1 className="text-2xl divide-solid divide-grey">Locations</h1>
      <br />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt
        iste reiciendis exercitationem sapiente perspiciatis explicabo eligendi
        et. Sit exercitationem rem laboriosam veniam nisi laborum at nam iste
        officia consequuntur.
      </div>

      <div class="max-w-lg mx-auto p-8">
        <details
          class="open:bg-thistle dark:open:bg-ultraViolet open:ring-1 open:ring-grey dark:open:ring-fedora open:shadow-lg p-6 rounded-lg"
          open
        >
          <summary class="text-sm leading-6 text-grey dark:text-seashell select-none">
            Why do they call it Ovaltine?
          </summary>
          <div class="mt-3 text-sm leading-6 text-ultraViolet dark:text-thistle">
            <p>
              The mug is round. The jar is round. They should call it Roundtine.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}
