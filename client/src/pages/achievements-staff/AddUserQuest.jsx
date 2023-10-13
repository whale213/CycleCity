import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import http from "../../http";
import { useFormik } from "formik";
import * as yup from "yup";

// icons
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

export default function AdduserQuests() {
  const [questList, setQuestList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedQuest, setSelectedQuest] = useState("");
  const [openQuestOptions, setOpenQuestOptions] = useState(false);
  const [id, setId] = useState(1);
  const navigate = useNavigate();

  const getQuests = () => {
    http.get("/quest").then((res) => {
      setQuestList(res.data);
    });
  };

  useEffect(() => {
    getQuests();
  }, []);

  const validationSchema = yup.object().shape({
    status: yup.string().max(100).trim().required(),
    questId: yup.number().integer().positive().required(),
  });

  const formik = useFormik({
    initialValues: {
      status: "",
      questId: 1,
    },

    validationSchema,
    onSubmit: (data) => {
      data.questId = id;
      data.status = data.status.trim();
      console.log(data);
      http.post("/userQuest", data).then((res) => {
        console.log(res.data);
        navigate("/staff/achievements/userQuest");
      });
    },
  });

  return (
    <div>
      <div className="m-12 xl:w-[110%]">
        <div className="flex space-x-1 text-md md:text-xl pl-8 pb-2 text-thistle dark:text-fedora">
          <Link
            to={"/staff/achievements/userQuest"}
            className="text-grey dark:text-thistle"
          >
            UserQuests
          </Link>
          <div className="flex">
            <MdOutlineKeyboardDoubleArrowRight size={30} />
          </div>

          <Link className="text-grey dark:text-thistle">New Quest </Link>
        </div>
        <div className="overflow-hidden">
          <div className="bg-seashell dark:bg-grey p-4 sm:p-6 md:h-[500px]">
            <div className="w-full mt-4 flex justify-center text-grey dark:text-seashell h-full overflow-auto">
              <form className="w-3/4 space-y-8" onSubmit={formik.handleSubmit}>
                <div className="w-full relative mt-2">
                  <div className="w-full font-medium">
                    <div
                      id="userQuest"
                      onClick={() => setOpenQuestOptions(!openQuestOptions)}
                      className={`bg-grey border-fedora text-thistle border-2 text-lg w-full p-3 flex items-center justify-between rounded-xl ${
                        !selectedQuest && "text-thistle"
                      }`}
                    >
                      {selectedQuest
                        ? selectedQuest.length > 25
                          ? selectedQuest.substring(0, 25) + "..."
                          : selectedQuest
                        : "Select Quest"}
                      <BiChevronDown
                        size={24}
                        className={`${openQuestOptions && "rotate-180"}`}
                      />
                    </div>
                    <ul
                      className={`mt-2 overflow-y-auto bg-grey border-2 rounded-xl ${
                        openQuestOptions
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
                          placeholder="Enter Quest Name"
                          className="placeholder:text-thistle p-2 bg-grey outline-none"
                        />
                      </div>
                      {questList.map((quest) => (
                        <li
                          key={quest.questId}
                          className={`p-2 text-sm hover:bg-thistle hover:text-grey ${
                            quest.name === selectedQuest &&
                            "bg-thistle text-grey"
                          } ${
                            quest.name.startsWith(inputValue)
                              ? "block"
                              : "hidden"
                          }`}
                          onClick={() => {
                            if (quest.name !== selectedQuest.toLowerCase()) {
                              setSelectedQuest(quest.name);
                              setId(quest.questId);
                              setOpenQuestOptions(false);
                              setInputValue("");
                            }
                          }}
                        >
                          <th className="px-10 py-3 text-left tracking-wider">
                            {quest.name}
                          </th>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-full relative mt-2">
                  <input
                    type="text"
                    id="status"
                    onChange={formik.handleChange}
                    value={formik.values.status}
                    className="peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors"
                    placeholder="Name"
                  />
                  <label
                    for="name"
                    className="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm"
                  >
                    Status
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
                    <Link to={"/staff/achievements/userQuest"}>
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
