import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import http from "../../http";
import { useFormik } from "formik";
import * as yup from "yup";

// icons
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { BsImage } from "react-icons/bs";
import { LuClock4 } from "react-icons/lu";

export default function EditLocations() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [location, setLocation] = useState({
    id: "",
    name: "",
    postalCode: "",
    address: "",
    imageFile: "",
    longitude: "",
    latitude: "",
    updatedAt: "",
  });

  const deleteLocation = () => {
    http.delete(`/location/${id}`).then((res) => {
      console.log(res.data);
    });
    navigate("/staff/itinerary/locations");
  };

  useEffect(() => {
    http.get(`/locations/${id}`).then((res) => {
      setLocation(res.data);
    });
  }, []);

  const formik = useFormik({
    initialValues: location,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(location);
    },
  });

  return (
    <div>
      <div class="m-12 ">
        <div className="flex space-x-1 text-md md:text-xl pl-8 pb-2 text-thistle dark:text-fedora">
          <Link
            to={"/staff/itinerary/locations"}
            className="text-grey dark:text-thistle"
          >
            Locations
          </Link>
          <div className="flex">
            <MdOutlineKeyboardDoubleArrowRight size={30} />
          </div>

          <Link className="text-grey dark:text-thistle">West Coast Park</Link>
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
                West Coast Park
              </h1>
              <div className="flex space-x-2 text-ultraViolet dark:text-thistle p-2">
                <LuClock4 />
                <div class="hidden md:block text-xs text-gray-500">
                  Last Modified:
                </div>
                <div class="block text-xs text-gray-500">10th Oct 2022</div>
              </div>
            </div>

            {/* <div className="flex w-full justify-center">
              <form>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" />

                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email" />

                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />

                <button>Submit</button>
              </form>
            </div> */}

            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore
            </p>

            <div className="w-full mt-4 flex justify-center text-grey dark:text-seashell h-56 overflow-auto">
              <div className="w-3/4 space-y-8">
                <div class="w-full">
                  <input
                    type="text"
                    id="name"
                    class="w-full pl-4 pr-10 py-3 border-2 bg-grey border-fedora rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors"
                    placeholder="Name"
                  />
                </div>
                <div class="w-full">
                  <input
                    type="text"
                    id="name"
                    class="w-full pl-4 pr-10 py-3 border-2 bg-grey border-fedora rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors"
                    placeholder="Address"
                  />
                </div>
                <div class="flex space-x-4">
                  <input
                    type="text"
                    id="name"
                    class="w-full pl-4 pr-10 py-3 border-2 bg-grey border-fedora rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors"
                    placeholder="Postal Code"
                  />
                  <input
                    type="text"
                    id="name"
                    class="w-full pl-4 pr-10 py-3 border-2 bg-grey border-fedora rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors"
                    placeholder="Longitude"
                  />
                  <input
                    type="text"
                    id="name"
                    class="w-full pl-4 pr-10 py-3 border-2 bg-grey border-fedora rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors"
                    placeholder="Latitude"
                  />
                </div>
                <div class="flex justify-center w-full mx-auto">
                  <div class="flex flex-col items-center justify-center w-full h-auto">
                    <div class="mt-4 mb-4 text-center">
                      <h2 class="text-2xl font-semibold mb-2">Upload Image</h2>
                      <p class="text-xs text-gray-500">
                        File should be of .jpg or .png format
                      </p>
                    </div>
                    <div class="relative w-full h-56 mb-4 border-2 border-fedora border-dashed rounded-xl shadow-inner hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors">
                      <input
                        type="file"
                        id="file-upload"
                        class="hidden"
                        multiple
                        accept=".png .jpeg"
                      />
                      <label
                        for="file-upload"
                        class="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
                      >
                        <p class="z-10 text-xs font-light text-center text-gray-500">
                          Click to upload or drag and drop
                        </p>
                        <div className="text-grey dark:text-seashell mb-2">
                          <BsImage size={60} />
                        </div>
                      </label>
                    </div>
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
