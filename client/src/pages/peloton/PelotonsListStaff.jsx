import React, { useState, useEffect } from "react";
import http from "../../http";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsExclamationCircle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { LuSearch } from "react-icons/lu";
import Modal from "../../components/modal/Modal";
import { Link, useNavigate } from "react-router-dom";

export default function PelotonsList() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const [pelotonList, setPelotonList] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState(0);
  const [nameToDelete, setNameToDelete] = useState("");
  const [idToEdit, setIdToEdit] = useState(0); //added

  const navigate = useNavigate();

  const getPelotons = () => {
    http.get("/peloton").then((res) => {
      setPelotonList(res.data);
    });
  };

  const searchPelotons = () => {
    http.get(`/peloton?search=${search}`).then((res) => {
      setPelotonList(res.data);
    });
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      searchPelotons();
    }
  };

  const onClickSearch = () => {
    searchPelotons();
  };

  const onClickClear = () => {
    setSearch("");
    getPelotons();
  };

  const deletePeloton = () => {
    http.delete(`/peloton/${idToDelete}`).then((res) => {
      console.log(res.data);
    });
    window.location.reload(true);
  };

  const editPeloton = () => {
    //added
    http.put(`/peloton/${idToEdit}`).then((res) => {
      console.log(res.data);
    });
    //window.location.reload(true);
  };

  useEffect(() => {
    getPelotons();
  }, []);

  return (
    <div className="text-grey dark:text-seashell m-6">
      <div className="flex flex-col items-center justify-center w-full min-h-full">
        <div className="w-full mx-auto p-2 text-gray-800 dark:text-seashell/90 relative overflow-hidden min-w-80 max-w-3xl">
          <div className="relative flex gap-2">
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
          <div className="-my-2 overflow-x-auto h-[728px] sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full text-sm text-gray-400 divide-y-2 divide-ultraViolet dark:divide-thistle">
                  <thead className="bg-orange-100 dark:bg-black dark:bg-opacity-20 text-sm uppercase font-medium">
                    <tr>
                      <th></th>
                      <th className="px-10 py-3 text-left tracking-wider">Name</th>
                      <th className="px-10 py-3 text-left tracking-wider">Type</th>
                      <th className="px-10 py-3 text-left tracking-wider">Owner</th>
                      <th className="px-10 py-3 text-left tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-thistle dark:divide-fedora">
                    {pelotonList.map((peloton, id) => (
                      <tr
                        className="hover:bg-orange-100 dark:hover:bg-onyx group"
                        key={peloton.pelotonId}
                        onClick={() => {
                          navigate(`/staff/peloton/edit/${peloton.pelotonId}`);
                        }}
                      >
                        <td className="pl-4">{peloton.pelotonId}</td>
                        <td className="flex px-10 py-4 whitespace-nowrap">
                          <span className="ml-2 font-medium text-ultraViolet dark:text-thistle">
                            {peloton.name}
                          </span>
                        </td>
                        <td className="px-10 py-4 whitespace-nowrap text-fedora dark:text-seashell">
                          <div className="flex flex-col-2 space-x-1 pl-1">
                            <div className="text-gray-400">SG</div>
                            <div>{peloton.type}</div>
                          </div>
                        </td>
                        <td className="px-8 py-4 whitespace-nowrap max-w-sm truncate">
                          {peloton.owner}
                        </td>
                        <td className="px-8 py-2 whitespace-nowrap">
                          <div className="flex gap-2">
                            <div
                              onClick={(event) => {
                                event.stopPropagation();
                                setIdToDelete(peloton.pelotonId);
                                setNameToDelete(peloton.name);
                                setOpen(true);
                              }}
                              className="hover:bg-orange-200 dark:hover:bg-fedora dark:hover:bg-opacity-70 hover:text-warning rounded-md p-2"
                            >
                              <RiDeleteBin6Line
                                size={20}
                                className="invisible group-hover:visible"
                              />
                            </div>
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
              Delete Peloton
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
              onClick={() => deletePeloton()}
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
