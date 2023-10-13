import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import http from "../../http";
import { useFormik } from "formik";
import * as yup from "yup";

// icons
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

export default function EditQuests() {
  const { id } = useParams();
  const [criteriaList, setCriteriaList] = useState([]);
  const [critId, setCritId] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [selectedCriteria, setSelectedCriteria] = useState("");
  const [openCriOptions, setOpenCriOptions] = useState(false);
  const navigate = useNavigate();

  const [quest, setQuest] = useState({
    name: "",
    exp: "",
    criteriaId: 0,
    criteria: [],
  });

  const validationSchema = yup.object().shape({
    name: yup.string().max(100).trim().required(),
    exp: yup.number().integer().positive().min(10).max(150).required(),
    criteriaId: yup.number().integer().positive().required(),
  });

  const getCriterias = () => {
    http.get("/criteria").then((res) => {
      setCriteriaList(res.data);
    });
  };

  useEffect(() => {
    getCriterias();
  }, []);

  useEffect(() => {
    http.get(`/quest/${id}`).then((res) => {
      setQuest(res.data);
    });
  }, []);

  const formik = useFormik({
    initialValues: quest,
    validationSchema,
    enableReinitialize: true,
    onSubmit: (data) => {
      console.log(data);
      data.criteriaId = critId;
      data.name = data.name.trim();

      http.put(`/quest/${id}`, data).then((res) => {
        console.log(res.data);
        navigate("/staff/achievements/quests");
      });
    },
  });
  return (
    <div>
      <div className="m-12 xl:w-[110%]">
        <div className="flex space-x-1 text-md md:text-xl pl-8 pb-2 text-thistle dark:text-fedora">
          <Link
            to={"/staff/achievements/quests"}
            className="text-grey dark:text-thistle"
          >
            Quests
          </Link>
          <div className="flex">
            <MdOutlineKeyboardDoubleArrowRight size={30} />
          </div>

          <Link className="text-grey dark:text-thistle">
            {formik.values.name}
          </Link>
        </div>
        <div className="overflow-hidden">
          <div className="bg-seashell dark:bg-grey p-4 sm:p-6 md:h-[500px]">
            <div className="w-full mt-4 flex justify-center text-grey dark:text-seashell h-full overflow-auto">
              <form className="w-3/4 space-y-8" onSubmit={formik.handleSubmit}>
                <div>Current Value: {formik.values.criteria.value}</div>
                <div className="w-full relative mt-2">
                  <div className="w-full font-medium">
                    <div
                      id="criterias"
                      onClick={() => setOpenCriOptions(!openCriOptions)}
                      className={`bg-grey border-fedora text-thistle border-2 text-lg w-full p-3 flex items-center justify-between rounded-xl ${
                        !selectedCriteria && "text-thistle"
                      }`}
                    >
                      {selectedCriteria
                        ? selectedCriteria.length > 25
                          ? selectedCriteria.substring(0, 25) + "..."
                          : selectedCriteria
                        : "Select Criteria"}
                      <BiChevronDown
                        size={24}
                        className={`${openCriOptions && "rotate-180"}`}
                      />
                    </div>
                    <ul
                      className={`mt-2 overflow-y-auto bg-grey border-2 rounded-xl ${
                        openCriOptions
                          ? "max-h-60 border-fedora"
                          : "max-h-0 border-transparent"
                      } `}
                    >
                      <div className="flex items-center px-2 sticky top-0 bg-grey">
                        <AiOutlineSearch size={20} className="text-thistle" />
                        <input
                          type="text"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          placeholder="Enter Criteria Value"
                          className="placeholder:text-thistle p-2 bg-grey outline-none"
                        />
                      </div>
                      {criteriaList.map((criteria) => (
                        <li
                          key={criteria.criteriaId}
                          className={`p-2 text-sm hover:bg-thistle hover:text-grey ${
                            criteria.value === selectedCriteria &&
                            "bg-thistle text-grey"
                          } ${
                            criteria.value.startsWith(inputValue)
                              ? "block"
                              : "hidden"
                          }`}
                          onClick={() => {
                            if (
                              criteria.value !== selectedCriteria.toLowerCase()
                            ) {
                              setSelectedCriteria(criteria.value);
                              setCritId(criteria.criteriaId);
                              setOpenCriOptions(false);
                              setInputValue("");
                            }
                          }}
                        >
                          <th className="px-10 py-3 text-left tracking-wider">
                            {criteria.value}
                          </th>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-full relative mt-2">
                  <input
                    type="text"
                    id="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    className="peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors"
                    placeholder="Name"
                  />

                  <label
                    for="name"
                    className="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm"
                  >
                    Name
                  </label>
                </div>
                <div className="w-full relative">
                  <input
                    type="number"
                    id="exp"
                    onChange={formik.handleChange}
                    value={formik.values.exp}
                    className="peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors"
                    placeholder="Exp"
                  />
                  <label
                    for="exp"
                    className="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm"
                  >
                    Exp
                  </label>
                </div>
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
                    <Link to={"/staff/achievements/quests"}>
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
