import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import http from "../../http";
import { useFormik } from "formik";
import * as yup from "yup";

// icons
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { BsImage } from "react-icons/bs";
import { LuClock4 } from "react-icons/lu";

export default function EditPeloton() {
  // const navigate = useNavigate();
  const { id } = useParams();
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    name: yup.string().min(3).trim().required(),
    type: yup.string().trim().required(),
    bio: yup.string().min(10).required(),
  });
  const [peloton, setPeloton] = useState({
    name: "",
    bio: "",
    type: "",
  });

  const formik = useFormik({
    initialValues: peloton,
    validationSchema,
    enableReinitialize: true,
    onSubmit: (data) => {
      data.name = data.name.trim();
      data.bio = data.bio.trim();
      data.type = data.type.trim();
      http.put(`/peloton/${id}`, data).then((res) => {
        console.log(res.data);
        // window.location.reload();
        navigate("/staff/peloton/list");
      });
    },
  });

  useEffect(() => {
    http.get(`/peloton/${id}`).then((res) => {
      setPeloton(res.data);
    });
  }, []);

  return (
    <div>
      <div className="m-12 xl:w-[80%]">
        <div className="flex space-x-1 text-md md:text-xl pl-8 pb-2 text-thistle dark:text-fedora">
          <Link
            to={"/staff/peloton/EditPeloton"}
            className="text-grey dark:text-thistle"
          >
            Pelotons
          </Link>
          <div className="flex">
            <MdOutlineKeyboardDoubleArrowRight size={30} />
          </div>

          <Link className="text-grey dark:text-thistle">Edit Peloton</Link>
        </div>
        <div className="overflow-hidden">
          <div className="bg-seashell dark:bg-grey p-4 sm:p-6 md:h-[500px]">
            <div className="w-full mt-4 flex justify-center text-grey dark:text-seashell h-full overflow-auto">
              <form className="w-3/4 space-y-8" onSubmit={formik.handleSubmit}>
                <div className="w-full relative mt-2">
                  <input
                    type="text"
                    id="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    className="peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors"
                    placeholder="Peloton Name"
                  />
                  <label
                    for="name"
                    className="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm"
                  >
                    Peloton Name
                  </label>
                </div>
                <div className="w-full relative">
                  <input
                    type="text"
                    id="bio"
                    onChange={formik.handleChange}
                    value={formik.values.bio}
                    className="peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors"
                    placeholder="Peloton Bio"
                  />
                  <label
                    for="bio"
                    className="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm"
                  >
                    Peloton Bio
                  </label>
                </div>
                <div className="w-full relative mt-2">
                  <input
                    type="text"
                    id="type"
                    onChange={formik.handleChange}
                    value={formik.values.type}
                    className="peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors"
                    placeholder="Peloton Name"
                  />
                  <label
                    for="type"
                    className="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm"
                  >
                    Type
                  </label>
                </div>
                {/* <div className="flex justify-center w-full mx-auto">
                  <div className="flex flex-col items-center justify-center w-full h-auto">
                    <div className="mt-4 mb-4 text-center">
                      <h2 className="text-2xl font-semibold mb-2">Upload Image</h2>
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
                    <Link to={"/staff/peloton/list"}>
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
