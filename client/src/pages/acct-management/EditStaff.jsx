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

export default function EditStaffs() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [staff, setStaff] = useState({
    // id: "",
    name: "",
    email: "",
    phoneNumber: "",
  });

  const deleteStaff = () => {
    http.delete(`/staff/${id}`).then((res) => {
      console.log(res.data);
    });
    navigate("/staff/profiles/staffs");
  };

  useEffect(() => {
    http.get(`/staff/${id}`).then((res) => {
      setStaff(res.data);
    });
  }, []);

  const formik = useFormik({
    initialValues: staff,
    enableReinitialize: true,
  });

  console.log("Form Values", formik);

  return (
    <div>
      <div class="m-12 xl:w-[110%]">
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
            class="h-40 w-full object-cover"
          />

          <div class="bg-seashell dark:bg-grey border border-glass p-4 sm:p-6 md:h-[340px] h-56">
            <div className="flex justify-between">
              <h1 className="text-lg md:text-2xl font-medium text-ultraViolet dark:text-thistle">
                {formik.values.name}
              </h1>
              <div className="flex space-x-2 text-ultraViolet dark:text-thistle p-2">
                <LuClock4 />
                <div class="hidden md:block text-xs text-gray-500">
                  Last Modified:
                </div>
                <div class="block text-xs text-gray-500">
                  {dayjs(formik.values.updatedAt).format(global.datetimeFormat)}
                </div>
              </div>
            </div>

            {/* <p class="mt-2 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              alias eos architecto tempore dolores! Vel delectus, quasi fuga
              veniam consectetur facere ipsum ea maiores odio! Ipsa aperiam
              exercitationem repellendus id.
              {formik.values.name} | {formik.values.address} | Postal Code:{" "}
              {formik.values.postalCode} | Longitude: {formik.values.longitude}{" "}
              | Latitude: {formik.values.latitude}
            </p> */}

            <div className="w-full mt-4 flex justify-center text-grey dark:text-seashell h-56 overflow-auto">
              <div className="w-3/4 space-y-8">
                <div className="w-full relative mt-2">
                  <input
                    type="text"
                    id="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    class="peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors"
                    placeholder="Name"
                  />
                  <label
                    for="name"
                    class="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm"
                  >
                    Name
                  </label>
                </div>
                <div className="w-full relative">
                  <input
                    type="text"
                    id="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    class="peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors"
                    placeholder="Email"
                  />
                  <label
                    for="email"
                    class="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm"
                  >
                    Email
                  </label>
                </div>
                <div class="flex space-x-4">
                  <div className="w-full relative">
                    <input
                      type="text"
                      id="phoneNumber"
                      onChange={formik.handleChange}
                      value={formik.values.phoneNumber}
                      class="peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors"
                      placeholder="phoneNumber"
                    />
                    <label
                      for="phoneNumber"
                      class="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm"
                    >
                      Phone Number
                    </label>
                  </div>
                </div>
                <div className="flex flex-row justify-center space-x-10">
                  <div>
                    <a className="py-2.5 px-5 bg-thistle text-grey dark:hover:text-seashell border-2 border-thistle rounded-lg hover:bg-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                      Update
                    </a>
                  </div>
                  <div>
                    <a className="py-2.5 px-5 bg-warning text-seashell hover:text-grey dark:hover:text-warning border-2 border-transparent rounded-lg hover:bg-transparent hover:border-warning transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                      Delete
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
