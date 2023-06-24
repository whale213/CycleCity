import React, { useState, useEffect } from "react";
import http from "../../http";
import { RiDeleteBin6Line } from "react-icons/ri";

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

  const [locationList, setLocationList] = useState([]);

  const getLocations = () => {
    http.get("/location").then((res) => {
      setLocationList(res.data);
    });
  };

  const deleteLocation = (id) => {
    http.delete(`/location/${id}`).then((res) => {
      console.log(res.data);
    });
    window.location.reload(true);
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <div className="text-grey dark:text-seashell m-6">
      <h1 className="text-2xl mb-4">Locations</h1>
      <div class="flex flex-col items-center justify-center w-full min-h-full">
        <h1 class="text-lg text-gray-400 font-medium">Locations</h1>
        <div class="flex flex-col mt-6 shadow-lg">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden sm:rounded-lg">
                <table class="min-w-full text-sm text-gray-400 divide-y-2 divide-thistle">
                  <thead class="bg-black bg-opacity-20 text-sm uppercase font-medium">
                    <tr>
                      <th></th>
                      <th class="px-10 py-3 text-left tracking-wider">Name</th>
                      <th class="px-10 py-3 text-left tracking-wider">
                        Postal Code
                      </th>
                      <th class="px-10 py-3 text-left tracking-wider">
                        Address
                      </th>
                      <th class="px-10 py-3 text-left tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-fedora">
                    {locationList.map((location) => (
                      <tr class="hover:bg-onyx group">
                        <td class="pl-4">{location.locationId}</td>
                        <td class="flex px-10 py-4 whitespace-nowrap">
                          <span class="ml-2 font-medium text-thistle">
                            {location.name}
                          </span>
                        </td>
                        <td class="px-10 py-4 whitespace-nowrap text-seashell">
                          <div className="flex flex-col-2 space-x-1 pl-1">
                            <div className="text-gray-400">SG</div>
                            <div>{location.postalCode}</div>
                          </div>
                        </td>
                        <td class="px-10 py-4 whitespace-nowrap">
                          {location.address}
                        </td>
                        <td class="px-8 py-2 whitespace-nowrap">
                          <div
                            key={location.locationId}
                            onClick={() => deleteLocation(location.locationId)}
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
