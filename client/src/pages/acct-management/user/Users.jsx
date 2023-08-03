import React, { useState, useEffect } from "react";
import http from "../../../http";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsExclamationCircle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { LuSearch } from "react-icons/lu";
import Modal from "../../../components/modal/Modal";

export default function Users() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const [userList, setUserList] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState(0);
  const [nameToDelete, setNameToDelete] = useState("");

  const getUsers = () => {
    http.get("/user").then((res) => {
      setUserList(res.data);
    });
  };

  const searchUsers = () => {
    http.get(`/user?search=${search}`).then((res) => {
      setUserList(res.data);
    });
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      searchUsers();
    }
  };

  const onClickSearch = () => {
    searchUsers();
  };

  const onClickClear = () => {
    setSearch("");
    getUsers();
  };

  const deleteUser = () => {
    http.delete(`/user/${idToDelete}`).then((res) => {
      console.log(res.data);
    });
    window.location.reload(true);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="text-grey dark:text-seashell m-6">
      <h1 className="text-2xl mb-4">Users</h1>
      <div className="flex flex-col items-center justify-center w-full min-h-full">
        <h1 className="text-lg text-gray-400 font-medium">Users</h1>
        <div className="w-full mx-auto p-2 text-gray-800 dark:text-seashell/90 relative overflow-hidden min-w-80 max-w-3xl">
          <div className="relative flex gap-2">
            <div className="grid place-items-center h-full w-12"></div>
            <input
              type="text"
              id="password"
              className="w-full pl-3 pr-10 py-2 border-2 bg-orange-100 dark:bg-fedora border-transparent rounded-xl hover:border-gray-400 focus:outline-none focus:border-ultraViolet dark:focus:border-thistle/60 transition-colors"
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
        <div className="flex flex-col mt-6 shadow-lg">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full text-sm text-gray-400 divide-y-2 divide-ultraViolet dark:divide-thistle">
                  <thead className="bg-orange-100 dark:bg-black dark:bg-opacity-20 text-sm uppercase font-medium">
                    <tr>
                      <th></th>
                      <th className="px-12 py-3 text-left tracking-wider">
                        Name
                      </th>
                      <th className="px-12 py-3 text-left tracking-wider">
                        Email
                      </th>
                      <th className="px-12 py-3 text-left tracking-wider">
                        Phone Number
                      </th>
                      <th className="px-12 py-3 text-left tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-thistle dark:divide-fedora">
                    {userList.map((User, id) => (
                      <tr
                        className="hover:bg-orange-100 dark:hover:bg-onyx group"
                        key={id}
                      >
                        <td className="pl-4">{User.userId}</td>
                        <td className="flex px-12 py-4 whitespace-nowrap">
                          <span className="ml-2 font-medium text-ultraViolet dark:text-thistle">
                            {User.name}
                          </span>
                        </td>
                        <td className="px-12 py-4 whitespace-nowrap text-fedora dark:text-seashell">
                          <div className="flex flex-col-2 space-x-1 pl-1">
                            {User.email}
                          </div>
                        </td>
                        <td className="px-12 py-4 whitespace-nowrap">
                          {User.phoneNumber}
                        </td>
                        <td className="px-10 py-2 whitespace-nowrap">
                          <div
                            onClick={() => {
                              setIdToDelete(User.userId);
                              setNameToDelete(User.name);
                              setOpen(true);
                            }}
                            className="hover:bg-orange-200 dark:hover:bg-fedora dark:hover:bg-opacity-70 hover:text-warning dark:text-seashell dark:hover:text-warning rounded-md p-2"
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
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-96">
          <BsExclamationCircle size={50} className="mx-auto text-warning" />
          <div className="mx-auto my-4 w-60">
            <h3 className="text-lg text-grey dark:text-seashell">
              Delete User
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
              onClick={() => deleteUser()}
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
