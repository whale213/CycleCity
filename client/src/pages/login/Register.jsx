import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export default function Register() {
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    name: yup.string().trim().min(3).required("Name is required"),
    email: yup
      .string()
      .trim()
      .email()
      .max(50)
      .email("Invalid email")
      .required("Email is required"),
    phoneNumber: yup
      .number()
      .integer()
      .min(80000000, "Phone number must be exactly 8 digits")
      .max(99999999, "Phone number must be 8 digits only")
      .required(),
    password: yup
      .string()
      .min(8, "Password must have at least 8 characters.")
      .max(50)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/,
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one symbol."
      )
      .required("Please enter a password."),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password."),
    bio: yup.string().trim().min(6).max(1000).required(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      passwordConfirmation: "",
      bio: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // Perform registration logic here
      navigate("/");
    },
  });

  return (
    <div>
      <div className="m-12 xl:w-[110%]">
        <div className="flex space-x-1 text-md md:text-xl pl-8 pb-2 text-thistle dark:text-fedora">
          <Link className="text-grey dark:text-thistle">New User </Link>
        </div>
        <div className="overflow-hidden">
          <div className="bg-seashell dark:bg-grey p-4 sm:p-6 md:h-[500px]">
            <div className="w-full mt-4 flex justify-center text-grey dark:text-seashell h-full overflow-auto">
              <div className="w-3/4 space-y-8">
                <form onSubmit={formik.handleSubmit}>
                  <div className="w-full relative mt-2">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                      className={`peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors ${
                        formik.touched.name && formik.errors.name
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="Name"
                    />
                    <label
                      htmlFor="name"
                      className={`absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm ${
                        formik.touched.name && formik.errors.name
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
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      className={`peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors ${
                        formik.touched.email && formik.errors.email
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="Email"
                    />
                    <label
                      htmlFor="email"
                      className={`absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm ${
                        formik.touched.email && formik.errors.email
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Email
                    </label>
                    {formik.touched.email && formik.errors.email && (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.email}
                      </div>
                    )}
                  </div>
                  <div className="w-full relative">
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phoneNumber}
                      className={`peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors ${
                        formik.touched.phoneNumber && formik.errors.phoneNumber
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="Phone Number"
                    />
                    <label
                      htmlFor="phoneNumber"
                      className={`absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm ${
                        formik.touched.phoneNumber && formik.errors.phoneNumber
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Phone Number
                    </label>
                    {formik.touched.phoneNumber &&
                      formik.errors.phoneNumber && (
                        <div className="text-red-500 text-sm mt-1">
                          {formik.errors.phoneNumber}
                        </div>
                      )}
                  </div>
                  <div className="w-full relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      className={`peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors ${
                        formik.touched.password && formik.errors.password
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className={`absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus>
                      text-thistle/80 peer-hover:text-thistle peer-focus:text-sm ${
                        formik.touched.password && formik.errors.password
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Password
                    </label>
                    {formik.touched.password && formik.errors.password && (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.password}
                      </div>
                    )}
                  </div>
                  <div className="w-full relative">
                    <input
                      type="password"
                      id="passwordConfirmation"
                      name="passwordConfirmation"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.passwordConfirmation}
                      className={`peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors ${
                        formik.touched.passwordConfirmation &&
                        formik.errors.passwordConfirmation
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="Confirm Password"
                    />
                    <label
                      htmlFor="passwordConfirmation"
                      className={`absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm ${
                        formik.touched.passwordConfirmation &&
                        formik.errors.passwordConfirmation
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Confirm Password
                    </label>
                    {formik.touched.passwordConfirmation &&
                      formik.errors.passwordConfirmation && (
                        <div className="text-red-500 text-sm mt-1">
                          {formik.errors.passwordConfirmation}
                        </div>
                      )}
                  </div>
                  <div className="w-full relative">
                    <textarea
                      id="bio"
                      name="bio"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.bio}
                      className={`peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors ${
                        formik.touched.bio && formik.errors.bio
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="Bio"
                    ></textarea>
                    <label
                      htmlFor="bio"
                      className={`absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm ${
                        formik.touched.bio && formik.errors.bio
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      Bio
                    </label>
                    {formik.touched.bio && formik.errors.bio && (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.bio}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-row justify-center space-x-10">
                    <div>
                      <button
                        className="py-2.5 px-5 bg-thistle text-grey dark:hover:text-seashell border-2 border-thistle rounded-lg hover:bg-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                        type="submit">
                        Sign Up
                      </button>
                    </div>
                    <div>
                      <Link to={"/"}>
                        <button className="py-2.5 px-5 bg-warning text-seashell hover:text-grey dark:hover:text-warning border-2 border-transparent rounded-lg hover:bg-transparent hover:border-warning">
                          Back
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
    </div>
  );
}
