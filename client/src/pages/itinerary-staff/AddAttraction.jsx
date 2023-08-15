import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import http from "../../http";
import { useFormik } from "formik";
import * as yup from "yup";

// icons
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

export default function AddLocations() {
  const [locationList, setLocationList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [openLocOptions, setOpenLocOptions] = useState(false);
  const [id, setId] = useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [openDiffOptions, setOpenDiffOptions] = useState(false);
  const difficultyList = [
    "Easy",
    "Medium",
    "Hard",
    "Extremely Difficult",
    "Impossible",
  ];

  const navigate = useNavigate();

  const getLocations = () => {
    http.get("/location").then((res) => {
      setLocationList(res.data);
    });
  };

  useEffect(() => {
    getLocations();
  }, []);

  const validationSchema = yup.object().shape({
    distance: yup
      .number()
      .positive("Distance must be positive")
      .typeError("Distance should only have digits")
      .test(
        "maxDigitsBeforeDecimal",
        "Distance should only have at most 3 digits before the decimal",
        (number) => /^\d{1,3}(?:\.\d+)?$/.test(number)
      )
      .test(
        "maxDigitsAfterDecimal",
        "Distance should have at most 3 digits after decimal or less",
        (number) => /^\d+(\.\d{1,3})?$/.test(number)
      )
      .required("Distance is required"),
    difficulty: yup
      .string()
      .trim()
      .min(4, "Difficulty should have at least 4 Characters")
      .required("Difficulty is required"),
  });

  const formik = useFormik({
    initialValues: {
      distance: 0.0,
      difficulty: "",
      locationId: 0,
    },
    validationSchema,
    onSubmit: (data) => {
      data.locationId = id;
      data.difficulty = data.difficulty.trim();
      data.imageFile = "Z43WyDDrMJ.jpg";
      console.log(data);
      http.post("/attraction", data).then((res) => {
        console.log(res.data);
        navigate("/staff/itinerary/attractions");
      });
    },
  });

  return (
    <div>
      <div className="m-12 xl:w-[110%]">
        <div className="flex space-x-1 text-md md:text-xl pl-8 pb-2 text-thistle dark:text-fedora">
          <Link
            to={"/staff/itinerary/attractions"}
            className="text-grey dark:text-thistle"
          >
            Attractions
          </Link>
          <div className="flex">
            <MdOutlineKeyboardDoubleArrowRight size={30} />
          </div>

          <Link className="text-grey dark:text-thistle">New Attraction </Link>
        </div>
        <div className="overflow-hidden w-[120%]">
          <div className="bg-seashell dark:bg-grey p-4 sm:p-6 md:h-[500px]">
            <div className="w-full mt-4 flex justify-center text-grey dark:text-seashell h-full overflow-auto">
              <form className="w-3/4 space-y-8" onSubmit={formik.handleSubmit}>
                <div className="w-full relative mt-2">
                  <div className="w-full font-medium">
                    <div
                      id="locations"
                      onClick={() => setOpenLocOptions(!openLocOptions)}
                      className={`bg-grey border-fedora text-thistle border-2 text-lg w-full p-3 flex items-center justify-between rounded-xl ${!selectedLocation && "text-thistle"
                        }`}
                    >
                      {selectedLocation
                        ? selectedLocation.length > 25
                          ? selectedLocation.substring(0, 25) + "..."
                          : selectedLocation
                        : "Select Location"}
                      <BiChevronDown
                        size={24}
                        className={`${openLocOptions && "rotate-180"}`}
                      />
                    </div>
                    <ul
                      className={`mt-2 overflow-y-auto bg-grey border-2 rounded-xl ${openLocOptions
                        ? "max-h-60 border-fedora"
                        : "max-h-0 border-transparent"
                        } `}
                    >
                      <div className="flex items-center px-2 sticky top-0 bg-grey">
                        <AiOutlineSearch size={20} className="text-thistle" />
                        <input
                          type="text"
                          value={inputValue}
                          onChange={(e) =>
                            setInputValue(e.target.value.toLowerCase())
                          }
                          placeholder="Enter Location Name"
                          className="placeholder:text-thistle p-2 bg-grey outline-none"
                        />
                      </div>
                      {locationList.map((location) => (
                        <li
                          key={location.locationId}
                          className={`p-2 text-sm hover:bg-thistle hover:text-grey ${location.name.toLowerCase() ===
                            selectedLocation.toLowerCase() &&
                            "bg-thistle text-grey"
                            } ${location.name.toLowerCase().startsWith(inputValue)
                              ? "block"
                              : "hidden"
                            }`}
                          onClick={() => {
                            if (
                              location.name.toLowerCase() !==
                              selectedLocation.toLowerCase()
                            ) {
                              setSelectedLocation(location.name);
                              setId(location.locationId);
                              setOpenLocOptions(false);
                              setInputValue("");
                            }
                          }}
                        >
                          {location.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex space-y-8 space-x-0 md:space-y-0 md:space-x-4 flex-col md:flex-row">
                  <div className="w-full relative">
                    <input
                      type="number"
                      id="distance"
                      onChange={formik.handleChange}
                      value={formik.values.distance}
                      className={`peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors ${formik.touched.distance && formik.errors.distance
                        ? "border-warning"
                        : ""
                        }`}
                      placeholder="Distance"
                    />
                    <label
                      for="distance"
                      className="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm"
                    >
                      Distance
                    </label>
                    {formik.errors.distance ? (
                      <div className="text-red-500 pt-2 px-2">
                        {formik.errors.distance}
                      </div>
                    ) : null}
                  </div>
                  <div className="w-full relative">
                    <input
                      type="text"
                      id="difficulty"
                      onChange={formik.handleChange}
                      value={formik.values.difficulty}
                      className={`peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors ${formik.touched.difficulty && formik.errors.difficulty
                        ? "border-warning"
                        : ""
                        }`}
                      placeholder="Difficulty"
                    />
                    {formik.errors.difficulty ? (
                      <div className="text-red-500 pt-2 px-2">
                        {formik.errors.difficulty}
                      </div>
                    ) : null}
                    <label
                      for="difficulty"
                      className="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm"
                    >
                      Difficulty
                    </label>
                  </div>
                </div>
                {/* 
                // fix difficulty dropdown
                component works but is not going through server 
                */}
                {/* <div className="w-full font-medium">
                  <div
                    id="difficulty"
                    onClick={() => setOpenDiffOptions(!openDiffOptions)}
                    className={`bg-grey border-fedora text-thistle border-2 text-lg w-full p-3 flex items-center justify-between rounded-xl ${
                      !selectedDifficulty && "text-thistle"
                    }`}
                  >
                    {selectedDifficulty
                      ? selectedDifficulty.length > 25
                        ? selectedDifficulty.substring(0, 25) + "..."
                        : selectedDifficulty
                      : "Select Difficulty"}
                    <BiChevronDown
                      size={24}
                      className={`${openDiffOptions && "rotate-180"}`}
                    />
                  </div>
                  <ul
                    className={`mt-2 overflow-y-auto bg-grey border-2 rounded-xl ${
                      openDiffOptions
                        ? "max-h-60 border-fedora"
                        : "max-h-0 border-transparent"
                    } `}
                  >
                    {difficultyList.map((difficulty, key) => (
                      <li
                        key={key}
                        className={`p-2 text-sm hover:bg-thistle hover:text-grey ${
                          difficulty.toLowerCase() ===
                            selectedDifficulty.toLowerCase() &&
                          "bg-thistle text-grey"
                        } ${difficulty.toLowerCase() ? "block" : "hidden"}`}
                        onClick={() => {
                          if (
                            difficulty.toLowerCase() !==
                            selectedDifficulty.toLowerCase()
                          ) {
                            setSelectedDifficulty(difficulty);
                            setOpenDiffOptions(false);
                          }
                        }}
                      >
                        {difficulty}
                      </li>
                    ))}
                  </ul>
                </div> */}
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
