import React, { useState, useEffect } from "react";
import http from "../../http";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { LuSearch } from "react-icons/lu";

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

  const [attractionList, setAttractionList] = useState([]);
  const [search, setSearch] = useState("");

  const getAttractions = () => {
    http.get("/attraction").then((res) => {
      setAttractionList(res.data);
    });
  };

  const searchAttractions = () => {
    http.get(`/attraction?search=${search}`).then((res) => {
      setAttractionList(res.data);
    });
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      searchAttractions();
    }
  };

  const onClickSearch = () => {
    searchAttractions();
  };

  const onClickClear = () => {
    setSearch("");
    getAttractions();
  };

  const deleteAttraction = (id) => {
    http.delete(`/attraction/${id}`).then((res) => {
      console.log(res.data);
    });
    window.location.reload(true);
  };

  useEffect(() => {
    getAttractions();
  }, []);

  return (
    <div className="text-grey dark:text-seashell m-6">
      <h1 className="text-2xl mb-4">Attractions</h1>
      <div class="flex flex-col items-center justify-center w-full min-h-full">
        <h1 class="text-lg text-gray-400 font-medium">Attractions</h1>
        <div class="w-full mx-auto p-2 text-gray-800 dark:text-seashell/90 relative overflow-hidden min-w-80 max-w-3xl">
          <div class="relative flex gap-2">
            <div className="grid place-items-center h-full w-12"></div>
            <input
              type="text"
              id="password"
              class="w-full pl-3 pr-10 py-2 border-2 bg-fedora border-transparent rounded-xl hover:border-gray-400 focus:outline-none focus:border-thistle/60 transition-colors"
              value={search}
              placeholder="Search"
              onChange={onSearchChange}
              onKeyDown={onSearchKeyDown}
            />
            <button onClick={onClickSearch}>
              <LuSearch size={35} />
            </button>
            <button onClick={onClickClear}>
              <RxCross2 size={40} />
            </button>
          </div>
        </div>
        <div class="flex flex-col mt-6 shadow-lg">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden sm:rounded-lg">
                <table class="min-w-full text-sm text-gray-400 divide-y-2 divide-thistle">
                  <thead class="bg-black bg-opacity-20 text-sm uppercase font-medium">
                    <tr>
                      <th></th>
                      <th class="px-12 py-3 text-left tracking-wider">Name</th>
                      <th class="px-12 py-3 text-left tracking-wider">
                        Distance
                      </th>
                      <th class="px-12 py-3 text-left tracking-wider">
                        Difficulty
                      </th>
                      <th class="px-12 py-3 text-left tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-fedora">
                    {attractionList.map((attraction, key) => (
                      <tr
                        class="hover:bg-onyx group"
                        key={attraction.attractionId}
                      >
                        <td class="pl-4">{attraction.attractionId}</td>
                        <td class="flex px-12 py-4 whitespace-nowrap">
                          <span class="ml-2 font-medium text-thistle">
                            {attraction.location.name}
                          </span>
                        </td>
                        <td class="px-12 py-4 whitespace-nowrap text-seashell">
                          <div className="flex flex-col-2 space-x-1 pl-1">
                            <div>{attraction.distance}</div>
                            <div className="text-gray-400">KM</div>
                          </div>
                        </td>
                        <td class="px-12 py-4 whitespace-nowrap">
                          {attraction.difficulty}
                        </td>
                        <td class="px-10 py-2 whitespace-nowrap">
                          <div
                            key={attraction.attractionId}
                            onClick={() =>
                              deleteAttraction(attraction.attractionId)
                            }
                            className="hover:bg-fedora hover:bg-opacity-70 hover:text-warning rounded-md p-2"
                          >
                            <RiDeleteBin6Line
                              size={20}
                              className="invisible group-hover:visible"
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
