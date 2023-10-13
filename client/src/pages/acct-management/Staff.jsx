import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import http from "../../http";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsExclamationCircle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { LuSearch } from "react-icons/lu";
import Modal from "../../components/modal/Modal";
import { useNavigate } from "react-router-dom";

export default function Staff() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const [staffList, setStaffList] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState(0);
  const [nameToDelete, setNameToDelete] = useState("");

  const navigate = useNavigate();

  const getStaff = () => {
    http.get("/staff").then((res) => {
      setStaffList(res.data);
    });
  };

  const searchStaff = () => {
    http.get(`/staff?search=${search}`).then((res) => {
      setStaffList(res.data);
    });
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      searchStaff();
    }
  };

  const onClickSearch = () => {
    searchStaff();
  };

  const onClickClear = () => {
    setSearch("");
    getStaff();
  };

  const deleteStaff = () => {
    http.delete(`/staff/${idToDelete}`).then((res) => {
      console.log(res.data);
    });
    window.location.reload(true);
  };

  useEffect(() => {
    getStaff();
  }, []);

  return (
    <div className="text-grey dark:text-seashell m-6">
      <div class="flex flex-col items-center justify-center w-full min-h-full">
        <div class="w-full mx-auto p-2 text-gray-800 dark:text-seashell/90 relative overflow-hidden min-w-full max-w-3xl">
          <div className="flex space-x-4 align-items-center justify-center">
            <div class="relative mt-1 w-full">
              <input
                type="search"
                id="search"
                class="w-full pl-12 pr-10 py-2 border-2 bg-grey border-fedora rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors"
                value={search}
                placeholder="Search"
                onChange={onSearchChange}
                onKeyDown={onSearchKeyDown}
              />
              <button
                class="block w-7 h-7 pl-4 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-thistle/90 transition-colors"
                onClick={onClickSearch}
              >
                <LuSearch size={24} />
              </button>
            </div>
            <button onClick={onClickSearch}>
              <LuSearch size={35} />
            </button>
            <button onClick={onClickClear}>
              <RxCross2 size={40} />
            </button>
          </div>
        </div>
        <div class="flex flex-col mt-6 shadow-lg">
          <div class="-my-2 overflow-x-auto h-[320px] sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-auto sm:rounded-lg">
                <table class="min-w-full text-sm text-gray-400 divide-y-2 divide-ultraViolet dark:divide-thistle">
                  <thead class="bg-orange-100 dark:bg-black dark:bg-opacity-20 text-sm uppercase font-medium">
                    <tr>
                      <th></th>
                      <th class="px-10 py-3 text-left tracking-wider">Name</th>
                      <th class="px-10 py-3 text-left tracking-wider">Email</th>
                      <th class="px-10 py-3 text-left tracking-wider">
                        Phone Number
                      </th>
                      <th class="px-10 py-3 text-left tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-thistle dark:divide-fedora">
                    {staffList.map((staff, id) => (
                      <tr
                        class="hover:bg-orange-100 dark:hover:bg-onyx cursor-pointer"
                        key={id}
                        onClick={() => {
                          navigate(`/staff/profiles/staff/${staff.staffId}`);
                        }}
                      >
                        <td class="pl-4">{staff.staffId}</td>
                        <td class="flex px-10 py-4 whitespace-nowrap">
                          <span class="ml-2 font-medium text-ultraViolet dark:text-thistle">
                            {staff.name}
                          </span>
                        </td>
                        <td class="px-10 py-4 whitespace-nowrap text-fedora dark:text-seashell">
                          <div className="flex flex-col-2 space-x-1 pl-1">
                            <div>{staff.email}</div>
                          </div>
                        </td>
                        <td class="px-8 py-4 whitespace-nowrap max-w-sm truncate">
                          {staff.phoneNumber}
                        </td>

                        <td class="px-8 py-2 whitespace-nowrap">
                          <div
                            onClick={(event) => {
                              event.stopPropagation();
                              setIdToDelete(staff.staffId);
                              setNameToDelete(staff.name);
                              setOpen(true);
                            }}
                            className="hover:bg-orange-200 dark:hover:bg-fedora dark:hover:bg-opacity-70 hover:text-warning rounded-md p-2"
                          >
                            <RiDeleteBin6Line size={20} className="visible" />
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
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-96">
          <BsExclamationCircle size={50} className="mx-auto text-warning" />
          <div className="mx-auto my-4 w-60">
            <h3 className="text-lg text-grey dark:text-seashell">
              Delete Staff
            </h3>
            <div className="text-sm text-gray-400 mt-4">
              <p>Are you sure you want to delete </p>
              <span className="text-ultraViolet dark:text-seashell">
                {nameToDelete} ?
              </span>
            </div>
          </div>
          <div className="flex gap-4 w-96 text-seashell dark:text-grey">
            <button
              onClick={() => setOpen(false)}
              className="border border-fedora hover:bg-fedora text-grey dark:text-seashell hover:text-seashell w-full rounded-lg p-1"
            >
              Cancel
            </button>
            <button
              onClick={() => deleteStaff()}
              className="bg-warning hover:bg-transparent border border-transparent hover:border-warning hover:text-warning dark:text-seashell dark:hover:text-warning w-full rounded-lg p-1"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
