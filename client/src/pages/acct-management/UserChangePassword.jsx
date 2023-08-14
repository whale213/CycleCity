import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import http from "../../http";
import { useFormik } from "formik";
import Modal from "../../components/modal/Modal";

import { BsExclamationCircle } from "react-icons/bs";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { RxArrowLeft } from "react-icons/rx";

export default function UserChangePassword() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const [idToDelete, setIdToDelete] = useState(0);
  const [nameToDelete, setNameToDelete] = useState("");

  const { user } = useContext(UserContext);

  const deleteAccount = () => {
    http.delete(`/user/${id}`).then((res) => {
      console.log(res.data);
      navigate("/");

      setIdToDelete(id);
      setNameToDelete(formik.values.name);
      setOpen(true);
    });
  };

  useEffect(() => {
    console.log(`User ${user}`);
    console.log(`User Id: ${user.id}`);
  }, [user]);

  const formik = useFormik({
    initialValues: user,
    enableReinitialize: true,
    onSubmit: (data) => {
      console.log(data);
      data.name = data.name.trim();
      data.email = data.email.trim();
      http.put(`/user/${user.id}`, data).then((res) => {
        console.log(res.data);
        navigate("/user/profile");
      });
    },
  });

  return (
    <div className="flex flex-col md:h-[500px] w-3/4">
      <Link
        to={"/user/profile/"}
        className="flex space-x-1 text-md md:text-xl pt-0 pl-16 pb-2 text-thistle dark:text-thistle"
      >
        Change Password
      </Link>
      <div className="flex items-center">
        <div className="p-2 pl-16 pt-10">
          <img
            src="https://thesmartlocal.com/wp-content/uploads/2021/01/west-coast-park_17.jpg"
            className="h-20 w-20 rounded-full object-cover"
          />
        </div>

        <Link to={"/user/profile"}>
          <button>
            <RxArrowLeft size={30} color="white" />
          </button>
        </Link>
      </div>
      <div>
        <div className="m-5 overflow-auto w-full shadow border transition hover:shadow-lg flex justify-center">
          <div className="w-full mt-4 flex justify-center text-grey dark:text-seashell h-56 overflow-auto ">
            <form className="w-3/4 space-y-8" onSubmit={formik.handleSubmit}>
              <div className="w-full relative mt-2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value=""
                  className={`peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors ${
                    formik.touched.name && formik.errors.name
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="Old Password"
                />
                <label
                  htmlFor="name"
                  className={`absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm ${
                    formik.touched.name && formik.errors.name
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  Old Password
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
                  value=""
                  className="peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors"
                  placeholder="Email"
                />
                <label
                  for="email"
                  className="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm"
                >
                  New Password
                </label>
              </div>
              {/* <div className="w-full relative">
                <input
                  type="text"
                  id="password"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors"
                  placeholder="Password"
                />
                <label
                  for=""
                  className="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm"
                >
                  Email
                </label>
              </div> */}
              <div className="flex space-x-4">
                <div className="w-full relative">
                  <input
                    type="number"
                    id="phoneNumber"
                    onChange={formik.handleChange}
                    value=""
                    className="peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors"
                    placeholder="Phone Number"
                  />
                  <label
                    for="phoneNumber"
                    className="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm"
                  >
                    Confirm New Password
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
                    Change Password
                  </button>
                </div>
                <br></br>
                <br></br>
              </div>

              {/* <Modal open={open} onClose={() => setOpen(false)}>
                <div className="text-center w-96">
                  <BsExclamationCircle
                    size={50}
                    className="mx-auto text-warning"
                  />
                  <div className="mx-auto my-4 w-60">
                    <h3 className="text-lg text-grey dark:text-seashell">
                      Delete Account
                    </h3>
                    <div className="text-sm text-gray-400 mt-4">
                      <p>Are you sure you want to delete your account? </p>
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
                      onClick={() => deleteAccount()}
                      className="bg-warning hover:bg-transparent border border-transparent hover:border-warning hover:text-warning dark:text-seashell dark:hover:text-warning w-full rounded-lg p-1"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </Modal> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
