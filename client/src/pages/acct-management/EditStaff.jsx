import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import http from "../../http";
import { useFormik } from "formik";
import * as yup from "yup";
// import dayjs from "dayjs";
// import global from "../../global";
import Modal from "../../components/modal/Modal";
import { BsExclamationCircle } from "react-icons/bs";

// icons
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { BsImage } from "react-icons/bs";
import { LuClock4 } from "react-icons/lu";

export default function EditStaff() {
  const [staffList, setStaffList] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState(0);
  const [nameToDelete, setNameToDelete] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const [location, setStaff] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const deleteStaff = () => {
    http.delete(`/staff/${id}`).then((res) => {
      console.log(res.data);
      navigate("/staff/profiles/staff");

      setIdToDelete(id);
      setNameToDelete(formik.values.name);
      setOpen(true);
    });
  };

  useEffect(() => {
    http.get(`/staff/${id}`).then((res) => {
      setStaff(res.data);
    });
  }, []);

  const formik = useFormik({
    initialValues: location,
    enableReinitialize: true,
    onSubmit: (data) => {
      console.log(data);
      data.name = data.name.trim();
      data.email = data.email.trim();
      http.put(`/staff/${id}`, data).then((res) => {
        console.log(res.data);
        navigate("/staff/profiles/staff");
      });
    },
  });

  return (
    <div>
      <div className="m-12 xl:w-[110%]">
        <div className="flex space-x-1 text-md md:text-xl pl-8 pb-2 text-thistle dark:text-fedora">
          <Link
            to={"/staff/profiles/staff"}
            className="text-grey dark:text-thistle"
          >
            Staff
          </Link>
          <div className="flex">
            <MdOutlineKeyboardDoubleArrowRight size={30} />
          </div>

          <Link className="text-grey dark:text-thistle">
            {formik.values.name}
          </Link>
        </div>
        <div className="overflow-hidden rounded-3xl shadow transition hover:shadow-lg">
          <img
            alt="Cycling"
            src="https://thesmartlocal.com/wp-content/uploads/2021/01/west-coast-park_17.jpg"
            className="h-40 w-full object-cover"
          />

          <div className="bg-seashell dark:bg-grey border border-glass p-4 sm:p-6 md:h-[340px] h-56">
            <div className="flex justify-between">
              <h1 className="text-lg md:text-2xl font-medium text-ultraViolet dark:text-thistle">
                {formik.values.name}
              </h1>
              <div className="flex space-x-2 text-ultraViolet dark:text-thistle p-2">
                <LuClock4 />
                <div className="hidden md:block text-xs text-gray-500">
                  Last Modified:
                </div>
                <div className="block text-xs text-gray-500">
                  {/* {dayjs(formik.values.updatedAt).format(global.datetimeFormat)} */}
                </div>
              </div>
            </div>
            <div className="w-full mt-4 flex justify-center text-grey dark:text-seashell h-56 overflow-auto">
              <form className="w-3/4 space-y-8" onSubmit={formik.handleSubmit}>
                <div className="w-full relative mt-2">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className={`peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors ${formik.touched.name && formik.errors.name
                      ? "border-red-500"
                      : ""
                      }`}
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm ${formik.touched.name && formik.errors.name
                      ? "text-red-500"
                      : ""
                      }`}
                  >
                    Name
                  </label>
                  {formik.touched.name && formik.errors.name && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.name}
                    </div>
                  )}
                </div>
                <div className="w-full relative">
                  <input
                    type="text"
                    id="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors"
                    placeholder="Email"
                  />
                  <label
                    for="email"
                    className="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm"
                  >
                    Email
                  </label>
                </div>
                <div className="flex space-x-4">
                  <div className="w-full relative">
                    <input
                      type="number"
                      id="phoneNumber"
                      onChange={formik.handleChange}
                      value={formik.values.phoneNumber}
                      className="peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors"
                      placeholder="Phone Number"
                    />
                    <label
                      for="phoneNumber"
                      className="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm"
                    >
                      Phone Number
                    </label>
                  </div>
                </div>
                {/* <div className="flex justify-center w-full mx-auto">
                  <div className="flex flex-col items-center justify-center w-full h-auto">
                    <div className="mt-4 mb-4 text-center">
                      <h2 className="text-2xl font-semibold mb-2">
                        Upload Image
                      </h2>
                      <p className="text-xs text-gray-500">
                        File should be of .jpg or .png format
                      </p>
                    </div>
                    <div className="relative w-full h-56 mb-4 border-2 border-fedora border-dashed rounded-xl shadow-inner hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors">
                      <input
                        type="file"
                        id="file-upload"
                        className="hidden"
                        // onChange={formik.handleChange}
                        // value={formik.values.imageFile}
                        // multiple
                        // accept=".png .jpeg"
                      />
                      <label
                        for="file-upload"
                        className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
                      >
                        <p className="z-10 text-xs font-light text-center text-gray-500">
                          Click to upload or drag and drop
                        </p>
                        <div className="text-grey dark:text-seashell mb-2">
                          <BsImage size={60} />
                        </div>
                      </label>
                    </div>
                  </div>
                </div> */}
                <div className="flex flex-row justify-center space-x-10">
                  <div>
                    <button
                      className="py-2.5 px-5 bg-thistle text-grey dark:hover:text-seashell border-2 border-thistle rounded-lg hover:bg-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                      id="submit"
                      type="submit"
                    >
                      Update
                    </button>
                  </div>
                  <div>
                    <a className="py-2.5 px-5 bg-warning text-seashell hover:text-grey dark:hover:text-warning border-2 border-transparent rounded-lg hover:bg-transparent hover:border-warning transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                      <button onClick={() => deleteStaff()}>Delete</button>
                    </a>
                  </div>
                </div>

                <Modal open={open} onClose={() => setOpen(false)}>
                  <div className="text-center w-96">
                    <BsExclamationCircle
                      size={50}
                      className="mx-auto text-warning"
                    />
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
              </form >
            </div >
          </div >
        </div >
      </div >
    </div >
  );
}
