import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import http from "../../http";
import { useFormik } from "formik";
import * as yup from "yup";
// import dayjs from "dayjs";
// import global from "../../global";

// icons
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { BsImage } from "react-icons/bs";
import { LuClock4 } from "react-icons/lu";
import { RxArrowLeft } from "react-icons/rx";

export default function ViewUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    role: "",
    rank: "",
    exp: "",
  });

  useEffect(() => {
    http.get(`/user/${id}`).then((res) => {
      setUser(res.data);
      console.log(res.data);
    });
  }, []);

  const formik = useFormik({
    initialValues: user,
    enableReinitialize: true,
    onSubmit: (data) => {
      console.log(data);
      data.name = data.name.trim();
      data.email = data.email.trim();
      data.role = data.role.trim();
      data.rank = data.rank.trim();
      http.put(`/users/${id}`, data).then((res) => {
        console.log(res.data);
        navigate("/staff/profiles/users");
      });
    },
  });

  return (
    <div>
      <div
        style={{
          position: "sticky",
          top: "0px",
          right: "0px",
          display: "flex",
          justifyContent: "flex-end",
          paddingTop: "25px",
          paddingLeft: "700px",
        }}
      >
        <Link to={"/staff/profiles/users"}>
          <button>
            <RxArrowLeft size={30} color="white" />
          </button>
        </Link>
      </div>
      <div className="m-12 xl:w-[110%]">
        <div className="flex space-x-1 text-md md:text-xl pl-8 pb-2 text-thistle dark:text-fedora">
          <Link
            to={"/staff/profiles/users"}
            className="text-grey dark:text-thistle"
          >
            Users
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
                <div className="w-full mt-2">
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className={`mb-1 ml-4 text-fedora text-sm transition-all ${
                        formik.touched.name && formik.errors.name
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Name
                    </label>
                    <div className="peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors">
                      {formik.values.name}
                    </div>
                    {formik.touched.name && formik.errors.name && (
                      <div className="text-red-500 text-sm mt-1 ml-4">
                        {formik.errors.name}
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full mt-2">
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className={`mb-1 ml-4 text-fedora text-sm transition-all ${
                        formik.touched.email && formik.errors.email
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Email
                    </label>
                    <div className="peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors">
                      {formik.values.email}
                    </div>
                    {formik.touched.email && formik.errors.email && (
                      <div className="text-red-500 text-sm mt-1 ml-4">
                        {formik.errors.email}
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full mt-2">
                  <div className="flex flex-col">
                    <label
                      htmlFor="phoneNumber"
                      className={`mb-1 ml-4 text-fedora text-sm transition-all ${
                        formik.touched.phoneNumber && formik.errors.phoneNumber
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Phone Number
                    </label>
                    <div className="peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors">
                      {formik.values.phoneNumber}
                    </div>
                    {formik.touched.phoneNumber &&
                      formik.errors.phoneNumber && (
                        <div className="text-red-500 text-sm mt-1 ml-4">
                          {formik.errors.phoneNumber}
                        </div>
                      )}
                  </div>
                </div>
                <div className="w-full mt-2">
                  <div className="flex flex-col">
                    <label
                      htmlFor="role"
                      className={`mb-1 ml-4 text-fedora text-sm transition-all ${
                        formik.touched.role && formik.errors.role
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Role
                    </label>
                    <div className="peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors">
                      {formik.values.role}
                    </div>
                    {formik.touched.role && formik.errors.role && (
                      <div className="text-red-500 text-sm mt-1 ml-4">
                        {formik.errors.role}
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full mt-2">
                  <div className="flex flex-col">
                    <label
                      htmlFor="rank"
                      className={`mb-1 ml-4 text-fedora text-sm transition-all ${
                        formik.touched.rank && formik.errors.rank
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Rank
                    </label>
                    <div className="peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors">
                      {formik.values.rank}
                    </div>
                    {formik.touched.rank && formik.errors.rank && (
                      <div className="text-red-500 text-sm mt-1 ml-4">
                        {formik.errors.rank}
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full mt-2">
                  <div className="flex flex-col">
                    <label
                      htmlFor="exp"
                      className={`mb-1 ml-4 text-fedora text-sm transition-all ${
                        formik.touched.exp && formik.errors.exp
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Experience
                    </label>
                    <div className="peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors">
                      {formik.values.exp}
                    </div>
                    {formik.touched.exp && formik.errors.exp && (
                      <div className="text-red-500 text-sm mt-1 ml-4">
                        {formik.errors.exp}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-row justify-center space-x-10">
                  <div>
                    <a className="py-2.5 px-5 bg-warning text-seashell hover:text-grey dark:hover:text-warning border-2 border-transparent rounded-lg hover:bg-transparent hover:border-warning transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                      Delete
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
