import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
// import AspectRatio from "@mui/joy/AspectRatio";
import http from "../../http";
import { useFormik } from "formik";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import UserContext from "../../context/UserContext";

export default function Comments() {
  const [commentsList, setCommentsList] = useState([]);
  const [likeList, setLikeList] = useState([]);
  const [Post, setPost] = useState();
  const postID = useParams();
  const [showImage, setShowImage] = useState(false);

  const { myUser } = useContext(UserContext);
  const myUserId = myUser.userId;

  const formik = useFormik({
    initialValues: {
      comment: "",
      userId: myUserId,
      postID: postID.id,
    },
    onSubmit: (data) => {
      data.comment = data.comment.trim();
      http.post("/comments", data).then((res) => {
        console.log(res.data);
        window.location.reload();
        navigate(`/user/comments/${postID.id}`);
      });
    },
  });

  const getComments = () => {
    http.get(`/comments/${postID.id}`).then((res) => {
      console.log(res.data);
      console.log(postID);
      setCommentsList(res.data);
    });
  };

  const getLikes = () => {
    http.get(`/likes/${postID.id}`).then((res) => {
      console.log(res.data);
      setLikeList(res.data);
    });
  };

  const getPost = () => {
    http.get(`/post/${postID.id}`).then((res) => {
      console.log("Fetched post data:", res.data);
      setPost(res.data);
    });
  };

  useEffect(() => {
    console.log("Running useEffect");
    getComments();
    getLikes();
    getPost();
  }, []);

  const handleDislike = (idToDislike) => {
    console.log("DISLIKE", idToDislike);
    http.delete(`/likes/${idToDislike}`).then((res) => {
      console.log(res.data);
    });
    window.location.reload(true);
  };

  const handleLike = () => {
    const data = {};
    data.userId = myUserId;
    data.postID = Post.postID;
    http.post(`/likes/`, data).then((res) => {
      console.log(res.data);
    });
    window.location.reload(true);
  };

  console.log("HELLO", Post);

  useEffect(() => {
    // Other useEffect code...

    // Set a timeout to show the image after half a second (500 milliseconds)
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 115);

    // Clear the timeout if the component unmounts before the delay is completed
    return () => clearTimeout(timer);
  }, []);

  const isLiked = likeList.some((item) => item.userId === myUserId);

  return (
    <div className="w-screen h-full">
      <div className="bg-fedora/20 rounded-md flex justify-center m-8 divide-x divide-fedora w-[90%] h-[90%] drop-shadow-xl max-w-screen-lg">
        <div className="w-2/3 flex items-stretch">
          {showImage && Post?.post && (
            <img
              src={`${import.meta.env.VITE_FILE_BASE_URL}${Post.post}`}
              alt=""
              className="object-center rounded-md self-center mx-auto"
            />
          )}
        </div>
        <div className="w-1/3">
          <header className="border-b border-fedora px-4">
            <Link
              to="#"
              className="cursor-pointer py-4 flex items-center text-sm outline-none focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
            >
              <img
                src={`${import.meta.env.VITE_FILE_BASE_URL}${
                  Post?.user_post_desc.profileImage
                }`}
                className="h-9 w-9 rounded-full object-cover"
                alt="user"
              />
              {Post?.user_post_desc?.name && (
                <p className="block ml-2 font-semibold text-thistle">
                  {Post.user_post_desc.name}
                </p>
              )}
            </Link>
          </header>
          <div className="overflow-y-auto h-[60%]">
            <div className="p-3">
              {commentsList.map((comment, i) => (
                <div
                  key={comment.commentID}
                  className="text-sm mb-2 flex flex-start items-center"
                >
                  <div>
                    <Link
                      to="#"
                      className="cursor-pointer flex items-center text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                    >
                      <img
                        className="h-8 w-8 rounded-full object-cover"
                        src={`${import.meta.env.VITE_FILE_BASE_URL}${
                          comment.user_comment_desc.profileImage
                        }`}
                        alt=""
                      />
                    </Link>
                  </div>
                  <p className="font-bold ml-2">
                    <Link to="#" className="cursor-pointer text-silver">
                      {comment.user_comment_desc.name}
                    </Link>
                    <span className="text-seashell font-medium ml-1 truncate">
                      {comment.comment}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="pl-4">
            <div className="pt-4">
              <div className="mb-2">
                <div className="flex items-center">
                  <span className="mr-3 inline-flex items-center cursor-pointer text-silver">
                    {isLiked ? (
                      <FaHeart
                        size={30}
                        onClick={() =>
                          handleDislike(
                            likeList.find((item) => item.userId === myUserId)
                              .likeID
                          )
                        }
                      />
                    ) : (
                      <FiHeart size={30} onClick={() => handleLike()} />
                    )}
                  </span>
                </div>
                <span className="text-gray-400 text-sm">
                  {likeList.length} Likes
                </span>
              </div>
              <span className="block ml-2 text-xs text-gray-600"></span>
            </div>
            <div>
              <div className="border-t pt-4 border-fedora">
                <form onSubmit={formik.handleSubmit} className="flex">
                  <input
                    id="comment"
                    onChange={formik.handleChange}
                    value={formik.values.comment}
                    className="w-5/6 h-[2.5rem] resize-none outline-none appearance-none bg-grey/20 text-seashell"
                    placeholder="Comment"
                  />
                  <button className="m-2 focus:outline-none border-none bg-transparent text-blue-600 hover:text-blue-400">
                    Enter
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
