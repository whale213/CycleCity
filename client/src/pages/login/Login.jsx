import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import http from "../../http";

import { RxArrowLeft } from "react-icons/rx";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import DarkModeLogo from "../../assets/logoDarkMode.png";
import UserContext from "../../context/UserContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .email()
      .max(50)
      .email("Invalid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must have at least 8 characters.")
      .max(50)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/,
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one symbol."
      )
      .required("Invalid password."),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (data) => {
      data.email = data.email.trim().toLowerCase();

      // List of predefined staff emails
      const staffEmails = [
        "staff1@mail.com",
        "staff2@mail.com",
        "staff3@mail.com",
        "staff4@mail.com",
        "staff5@mail.com",
      ];

      // Check if the email is in the staffEmails list
      const isEmailInStaffsList = staffEmails.includes(data.email);

      if (isEmailInStaffsList) {
        // Redirect the user to staff page
        navigate("/staff");
        return; // Exit the function early since we don't want to proceed with regular login
      }

      data.password = data.password.trim();
      http
        .post("/user/login", data)
        .then((res) => {
          localStorage.setItem("accessToken", res.data.accessToken);
          setUser(res.data.user);
          navigate("/user/profile");
          window.location.reload();
        })
        .catch(function (err) {
          console.log(err.response.data.message);
          window.alert(err.response.data.message);
        });
    },
  });

  return (
    <>
      <div class="md:flex md:items-center md:gap-12">
        <a href="/">
          <img
            src={DarkModeLogo}
            alt="CycleCity"
            className="w-20 h-20"
            style={{ marginLeft: "40px", marginTop: "10px" }}
          />
        </a>
      </div>

      <div
        style={{
          position: "sticky",
          top: "0px",
          right: "20px",
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "50px",
          paddingTop: "-50px",
        }}
      >
        <Link to={"/"}>
          <button>
            <RxArrowLeft size={30} color="white" />
          </button>
        </Link>
      </div>
      <div
        className="w-full grid grid-rows-2 justify-items-center"
        style={{ marginTop: "-140px" }}
      >
        <h1 className="text-5xl text-grey dark:text-seashell mt-40">Login</h1>

        <div className="">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex gap-4">
              <div className="w-full relative mt-2">
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  style={{ color: "seashell" }}
                  className={`peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="Email"
                />
                <label
                  htmlFor="emaiL"
                  className={`absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm ${
                    formik.touched.email && formik.errors.email
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  Email
                </label>
                {formik.touched.name && formik.errors.name && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </div>
                )}
              </div>

              <br></br>
              <br></br>

              <div className="w-full relative mt-2 flex gap-4">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  style={{ color: "seashell" }}
                  className={`peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors ${
                    formik.touched.password && formik.errors.password
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="Password"
                />

                <label
                  htmlFor="password"
                  className={`absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm ${
                    formik.touched.password && formik.errors.password
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  Password
                </label>
                <span
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                  style={{ color: "white", top: "50%", left: "90%" }} // Adjust the value here
                >
                  {showPassword ? <BsEyeSlash /> : <BsEye />}
                </span>
              </div>
            </div>

            <br></br>

            <div className="flex justify-center space-x-10">
              <div>
                <button
                  className="py-2.5 px-5 bg-thistle text-grey dark:hover:text-seashell border-2 border-thistle rounded-lg hover:bg-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </div>
          </form>

          <br></br>

          <div className="flex flex-column justify-center">
            <h2 className="text-small text-seashell">Don't have an account?</h2>

            <br></br>
            <br></br>
          </div>

          <div className="flex justify-center">
            <Link to={"/register"}>
              <button
                className="py-2.5 px-5 bg-thistle text-grey dark:hover:text-seashell border-2 border-thistle rounded-lg hover:bg-transparent transition ease-in duration-200 trans   hover:-translate-y-1 active:translate-y-0"
                type="submit"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
