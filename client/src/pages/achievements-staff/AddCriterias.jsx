import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import http from "../../http";
import { useFormik } from "formik";
import * as yup from "yup";

// icons
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { BsImage } from "react-icons/bs";
import { LuClock4 } from "react-icons/lu";

export default function AddCriterias() {
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    type: yup.string().max(50).trim().required(),
    value: yup.string().max(50).trim().required(),
  });

  const formik = useFormik({
    initialValues: {
      type: "",
      value: "",
    },

    validationSchema,
    onSubmit: (data) => {
      data.type = data.type.trim();
      data.value = data.value.trim();
      http.post("/criteria", data).then((res) => {
        console.log(res.data);
        navigate("/staff/achievements/criterias");
      });
    },
  });

  return (
    <div>
      <div className="m-12 xl:w-[110%]">
        <div className="flex space-x-1 text-md md:text-xl pl-8 pb-2 text-thistle dark:text-fedora">
          <Link
            to={"/staff/achievements/criterias"}
            className="text-grey dark:text-thistle"
          >
            Criterias
          </Link>
          <div className="flex">
            <MdOutlineKeyboardDoubleArrowRight size={30} />
          </div>

          <Link className="text-grey dark:text-thistle">New Criteria </Link>
        </div>
        <div className="overflow-hidden">
          <div className="bg-seashell dark:bg-grey p-4 sm:p-6 md:h-[500px]">
            <div className="w-full mt-4 flex justify-center text-grey dark:text-seashell h-full overflow-auto">
              <form className="w-3/4 space-y-8" onSubmit={formik.handleSubmit}>
                <div className="w-full relative mt-2">
                  <input
                    type="text"
                    id="type"
                    onChange={formik.handleChange}
                    value={formik.values.type}
                    className="peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors"
                    placeholder="Name"
                  />
                  <label
                    for="name"
                    className="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm"
                  >
                    Type
                  </label>
                </div>
                <div className="w-full relative">
                  <input
                    type="text"
                    id="value"
                    onChange={formik.handleChange}
                    value={formik.values.value}
                    className="peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors"
                    placeholder="Exp"
                  />
                  <label
                    for="value"
                    className="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm"
                  >
                    Value
                  </label>
                </div>

                <div className="flex flex-row justify-center space-x-10">
                  <div>
                    <button
                      className="py-2.5 px-5 bg-thistle text-grey dark:hover:text-seashell border-2 border-thistle rounded-lg hover:bg-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                      id="submit"
                      type="submit"
                    >
                      Create
                    </button>
                  </div>
                  <div>
                    <Link to={"/staff/achievements/criterias"}>
                      <a className="py-2.5 px-5 bg-warning text-seashell hover:text-grey dark:hover:text-warning border-2 border-transparent rounded-lg hover:bg-transparent hover:border-warning transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                        Cancel
                      </a>
                    </Link>
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
