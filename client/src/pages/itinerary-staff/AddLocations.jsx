import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import http from "../../http";
import { useFormik } from "formik";
import * as yup from "yup";

// icons
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { BsImage } from "react-icons/bs";

export default function AddLocations() {
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .min(3, "Name must have at least 3 characters")
      .max(100, "Name must be at most 100 characters")
      .required("Name is required"),
    address: yup
      .string()
      .trim()
      .min(3, "Address must have at least 3 characters")
      .max(100, "Address must have at most 100 characters")
      .required("Address is required"),
    postalCode: yup
      .string()
      .trim()
      .matches(/^[0-9]+$/, "Postal Code should only have digits")
      .min(6, "Postal Code should only have 6 digits")
      .max(6, "Postal Code should only have 6 digits")
      .required("Postal Code is required"),
    longitude: yup
      .number()
      .typeError("Longitude should only have digits")
      .test(
        "maxDigitsBeforeDecimal",
        "Longitude should have at most 3 digits before the decimal",
        (number) => /^\d{1,3}(?:\.\d+)?$/.test(number)
      )
      .test(
        "maxDigitsAfterDecimal",
        "Longitude should have at most 8 digits after decimal or less",
        (number) => /^\d+(\.\d{1,8})?$/.test(number)
      )
      .required("Longitude is required"),
    latitude: yup
      .number()
      .typeError("Latitude should only have digits")
      .test(
        "maxDigitsBeforeDecimal",
        "Latitude should have at most 3 digits before the decimal",
        (number) => /^\d{1,3}(?:\.\d+)?$/.test(number)
      )
      .test(
        "maxDigitsAfterDecimal",
        "Latitude should have at most 8 digits after decimal or less",
        (number) => /^\d+(\.\d{1,8})?$/.test(number)
      )
      .required("Latitude is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      postalCode: "",
      address: "",
      longitude: "",
      latitude: "",
    },
    validationSchema,
    onSubmit: (data) => {
      if (imageFile) {
        data.imageFile = imageFile;
      }
      data.name = data.name.trim();
      data.postalCode = data.postalCode.trim();
      data.address = data.address.trim();
      data.imageFile = data.imageFile.trim();
      http.post("/location", data).then((res) => {
        console.log(res.data);
        navigate("/staff/itinerary/locations");
      });
    },
  });

  const onFileChange = (e) => {
    let file = e.target.files[0];
    if (file) {
      let formData = new FormData();
      formData.append("file", file);
      http
        .post("/file/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          setImageFile(res.data.filename);
        })
        .catch(function (error) {
          console.log(error.response);
        });
    }
  };

  return (
    <div>
      <div className="m-12 xl:w-[110%]">
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

          <Link className="text-grey dark:text-thistle">New Location </Link>
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
                    className={`peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors ${formik.touched.name && formik.errors.name
                      ? "border-warning"
                      : ""
                      }`}
                    placeholder="Name"
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                  {formik.errors.name ? (
                    <div className="text-red-500 pt-2 px-2">
                      {formik.errors.name}
                    </div>
                  ) : null}
                  <label
                    for="name"
                    className="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm"
                  >
                    Name
                  </label>
                </div>
                <div className="w-full relative">
                  <input
                    type="text"
                    id="address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    className={`peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors ${formik.touched.address && formik.errors.address
                      ? "border-warning"
                      : ""
                      }`}
                    placeholder="Address"
                  />
                  {formik.errors.address ? (
                    <div className="text-red-500 pt-2 px-2">
                      {formik.errors.address}
                    </div>
                  ) : null}
                  <label
                    for="address"
                    className="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm"
                  >
                    Address
                  </label>
                </div>
                <div className="flex space-x-4">
                  <div className="w-full relative">
                    <input
                      type="text"
                      id="postalCode"
                      onChange={formik.handleChange}
                      value={formik.values.postalCode}
                      className={`peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors ${formik.touched.postalCode && formik.errors.postalCode
                        ? "border-warning"
                        : ""
                        }`}
                      placeholder="Postal Code"
                    />
                    {formik.errors.postalCode ? (
                      <div className="text-red-500 pt-2 px-2">
                        {formik.errors.postalCode}
                      </div>
                    ) : null}
                    <label
                      for="postalCode"
                      className="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm"
                    >
                      Postal Code
                    </label>
                  </div>
                  <div className="w-full relative">
                    <input
                      type="text"
                      id="longitude"
                      onChange={formik.handleChange}
                      value={formik.values.longitude}
                      className={`peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors ${formik.touched.longitude && formik.errors.longitude
                        ? "border-warning"
                        : ""
                        }`}
                      placeholder="Longitude"
                    />
                    {formik.errors.longitude ? (
                      <div className="text-red-500 pt-2 px-2">
                        {formik.errors.longitude}
                      </div>
                    ) : null}
                    <label
                      for="longitude"
                      className="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm"
                    >
                      Longitude
                    </label>
                  </div>
                  <div className="w-full relative">
                    <input
                      type="text"
                      id="latitude"
                      onChange={formik.handleChange}
                      value={formik.values.latitude}
                      className={`peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors ${formik.touched.latitude && formik.errors.latitude
                        ? "border-warning"
                        : ""
                        }`}
                      placeholder="Latitude"
                    />
                    {formik.errors.latitude ? (
                      <div className="text-red-500 pt-2 px-2">
                        {formik.errors.latitude}
                      </div>
                    ) : null}
                    <label
                      for="latitude"
                      className="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm"
                    >
                      Latitude
                    </label>
                  </div>
                </div>
                <div className="flex justify-center w-full mx-auto">
                  <div className="flex flex-col items-center justify-center w-full h-auto">
                    <div className="mt-4 mb-4 text-center">
                      <h2 className="text-2xl font-semibold mb-2">
                        Upload Image
                      </h2>
                      <p className="text-xs text-gray-500">
                        All image formats are supported
                      </p>
                    </div>
                    <div className="relative w-full h-56 mb-4 border-2 border-fedora border-dashed rounded-xl shadow-inner hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors">
                      <input
                        type="file"
                        id="file-upload"
                        className="hidden"
                        onChange={onFileChange}
                        accept="image/*"
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
                    <Link to={"/staff/itinerary/locations"}>
                      <button className="py-2.5 px-5 bg-warning text-seashell hover:text-grey dark:hover:text-warning border-2 border-transparent rounded-lg hover:bg-transparent hover:border-warning transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                        Cancel
                      </button>
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
