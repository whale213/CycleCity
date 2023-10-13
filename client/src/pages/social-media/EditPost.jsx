import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import http from "../../http";
import { useFormik } from "formik";
import UserContext from '../../context/UserContext';




// icons
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { BsImage } from "react-icons/bs";
import { LuClock4 } from "react-icons/lu";

export default function EditPost() {
    const navigate = useNavigate();
    const [postFile, setpostFile] = useState(null);
    const postID = useParams();

    console.log(postID)

    const { myUser } = useContext(UserContext);


    const formik = useFormik({
        initialValues: {
            caption: "",
            userId: myUser.userId
        },
        onSubmit: (data) => {
            if (postFile) {
                data.post = postFile;
            }
            data.caption = data.caption.trim();
            data.post = data.post.trim();
            http.put(`/userpost/${postID.id}`, data).then((res) => {
                console.log(res.data);
                navigate("/user/userpost");
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
                    setpostFile(res.data.filename);
                })
                .catch(function (error) {
                    console.log(error.response);
                });
        }
    };

    return (
        <div className="min-w-full">
            <div className="m-12 xl:w-[110%]">
                <div className="flex space-x-1 text-md md:text-xl pl-8 pb-2 text-thistle dark:text-fedora">
                    <Link
                        to={"/user/userpost"}
                        className="text-grey dark:text-thistle"
                    >
                        Post
                    </Link>
                    <div className="flex">
                        <MdOutlineKeyboardDoubleArrowRight size={30} />
                    </div>

                    <Link className="text-grey dark:text-thistle">Edit Post</Link>
                </div>
                <div className="overflow-hidden ">
                    <div className="bg-seashell dark:bg-grey p-4 sm:p-6 md:h-[500px]  ">
                        <div className="w-full mt-4 flex justify-center text-grey dark:text-seashell h-full overflow-auto ">
                            <form className="w-3/4 space-y-8 " onSubmit={formik.handleSubmit}>
                                <div className="w-full relative mt-2 ">
                                    <input
                                        type="text"
                                        id="caption"
                                        onChange={formik.handleChange}
                                        value={formik.values.caption}
                                        className="peer pl-4 pr-10 py-3 w-full border-2 bg-grey border-fedora placeholder-transparent rounded-xl hover:border-thistle/90 focus:outline-none focus:border-thistle/60 transition-colors "
                                        placeholder="Caption"
                                    />
                                    <label
                                        for="caption"
                                        className="absolute left-0 ml-4 px-1 rounded -top-2.5 text-fedora bg-grey text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-thistle/80 peer-hover:text-thistle peer-focus:text-sm "
                                    >
                                        Caption
                                    </label>
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
                                            Update
                                        </button>
                                    </div>
                                    <div>
                                        <Link to={"/user/userpost"}>
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