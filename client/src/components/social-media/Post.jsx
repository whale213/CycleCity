import React from "react";
import { useState, useEffect } from "react";
import Modal from "../../components/modal/Modal";
import http from "../../http";
import { Link, useNavigate } from "react-router-dom";


// icons
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import { BsExclamationCircle } from "react-icons/bs";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";



function Post({ post }) {
  const [idToDelete, setIdToDelete] = useState(0);
  const [open, setOpen] = useState(false);
  const [nameToDelete, setNameToDelete] = useState("");
  const [likeList, setLikeList] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const navigate = useNavigate();


  const getComments = () => {
    http.get(`/comments/${post.postID}`).then((res) => {
      console.log(res.data);
      setCommentList(res.data);
    });
  };

  const onClick = () => {
    navigate(`user/comments/${post.postID}`);
  }

  const getLikes = () => {
    http.get(`/likes/${post.postID}`).then((res) => {
      console.log(res.data);
      setLikeList(res.data);
    });
  };

  useEffect(() => {
    setIdToDelete(post.postID);
    getLikes();
    getComments();
  }, []);

  const deletePost = () => {
    http.delete(`/userpost/${idToDelete}`).then((res) => {
      console.log(res.data);
    });
    window.location.reload(true);
  };


  return (
    <div class="flex bg-ultraViolet shadow-lg rounded-lg mx-4 md:mx-auto my-56 max-w-md md:max-w-2xl min-w-[98%]" >
      <div class="flex items-start px-4 py-6">
        {/* <img class="w-12 h-12 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar"/>*/}
        <img src="post.user_post_desc.profileImage" alt="" />
        <div class="">
          <div class="flex items-center justify-between">
            <Link to={`http://localhost:5173/user/postprofile/${post.user_post_desc.userId}`}>
              <h2 class="text-lg font-semibold text-seashell -mt-1">{post.user_post_desc.name}</h2>
            </Link>

            <p>{post.postID}</p>
          </div>
          <p class="text-seashell">{post.createdAt}</p>
          <p class="mt-3 text-seashell text-sm min-w-full">
            <a href={`http://localhost:5173/user/comments/${post.postID}`}>{post.caption}</a>
          </p>
          {post.post && (
            <img
              src={`${import.meta.env.VITE_FILE_BASE_URL}${post.post}`}
              alt=""
              class="rounded-md mx-auto" />
          )}
          <img src="" alt="" />
          {/* <div class="mt-4 flex items-center">
            <div class="flex mr-2 text-gray-700 text-sm mr-3">
              <AiFillHeart />
              <span>{likeList.length}</span>
            </div>
            <div class="flex mr-2 text-gray-700 text-sm mr-8">
              <AiOutlineComment />
              <span>{commentList.length}</span>
            </div>
            <div class="flex mr-2 text-gray-700 text-sm mr-4">
            </div>
          </div> */}
          <div className="items-start">
            {post.user_post_desc.userId === 2 && (
              <div
                onClick={() => {
                  setIdToDelete(post.postID);
                  setNameToDelete(post.user_post_desc.name);
                  setOpen(true);
                }}
                className="hover:bg-orange-200 dark:hover:bg-fedora dark:hover:bg-opacity-70 hover:text-warning dark:text-grey dark:hover:text-warning rounded-md p-2 max-w-fit max-h-fit"
              >
                <RiDeleteBin6Line
                  size={20}
                  className="visible"
                />


              </div>
            )}
            <div>
              {post.user_post_desc.userId === 2 && (

                <Link to={`http://localhost:5173/user/editpost/${post.postID}`}>
                  <div
                    className="hover:bg-blue-200 dark:hover:bg-fedora dark:hover:bg-opacity-70 dark:text-grey dark:hover:text-seashell rounded-md p-2 max-w-fit max-h-fit"
                  >
                    <RiEditLine
                      size={20}
                      className="visible"
                    />

                  </div>
                </Link>

              )}

            </div>
          </div>



        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-96">
          <BsExclamationCircle size={50} className="mx-auto text-warning" />
          <div className="mx-auto my-4 w-60">
            <h3 className="text-lg text-grey dark:text-seashell">
              Delete Post
            </h3>
            <div className="text-sm text-gray-400 mt-4">
              <p>Are you sure you want to delete </p>
              <span className="text-ultraViolet dark:text-seashell">
                ?
              </span>
            </div>
          </div>
          <div className="flex gap-4 w-96 text-seashell dark:text-grey">
            <button
              onClick={() => setOpen(false)}
              className="border border-fedora hover:bg-fedora text-grey dark:text-seashell hover:text-seashell w-full rounded-lg p-1"
            >
              Cancel
            </button>
            <button
              onClick={() => deletePost()}
              className="bg-warning hover:bg-transparent border border-transparent hover:border-warning hover:text-warning dark:text-seashell dark:hover:text-warning w-full rounded-lg p-1"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>

  );
}



export default Post;





// <div class="block p-6 rounded-lg shadow-lg bg-gray-100 ml-auto mr-auto w-200">
//     <div class="w-200">
//         <div class="flex justify-between mb-4 align-bottom">
//         <img
//             src="post.user_post_desc.profileImage"
//             alt=""
//             class="w-10 h-10 rounded-lg object-cover m-3"
//         />
//         <a
//             href="#!"
//             class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm m-3"
//         >
//             {post.user_post_desc.name}
//         </a>
//         <a
//             href="#!"
//             class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm m-3"
//         >
//             {post.createdAt}
//         </a>
//         </div>
//         <p class="text-gray-700 mb-6">
//         {post.caption}
//         </p>
//         <img
//         src="post.post"
//         alt=""
//         class="w-full max-h-96 object-cover mt-5"
//         />

//         <div class="flex items-center gap-5">
//         <div class="flex items-center gap-3 cursor-pointer text-xs">
//             {/* {liked ? <AiFillHeart /> : <AiOutlineHeart />} */}
//             <AiFillHeart />
//         </div>
//         <div>
//             <AiOutlineComment />
//         </div>
//         <div>
//             <BiShare />
//         </div>
//         </div>
//     </div>
//     </div>


// import React from 'react'
// import { BiDotsHorizontalRounded } from "react-icons/bi";
// import { AiOutlineHeart } from "react-icons/ai";
// import { AiFillHeart } from "react-icons/ai";
// import { useState, useEffect } from "react";
// import http from "../../http";
// import { AiOutlineComment } from "react-icons/ai";
// import { BiShare } from "react-icons/bi";





// import { Link } from "react-router-dom";



// function Post({post}) {

//     const liked = false;
//     const [likeList, setLikeList] = useState([]);


//     const getLikes = () => {
//         http.get(`/likes/${post.postID}`).then((res) => {
//           setLikeList(res.data);
//         });
//       };

//     useEffect(() => {
//     getLikes();
//     }, []);


//   return (
//     <div class="block p-6 rounded-lg shadow-lg bg-gray-100 ml-auto mr-auto w-200">
//         <div class="w-200">
//             <div class="flex justify-between mb-4 align-bottom">
//                 <img src="post.user_post_desc.profileImage" alt="" class = "w-10 h-10 rounded-lg object-cover m-3"/>
//                 <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm m-3">{post.user_post_desc.name}</a>
//                 <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm m-3">{post.createdAt}</a>
//             </div>
//             <p class="text-gray-700 mb-6">{post.caption}</p>
//             <img src = "post.post" alt="" class = "w-full max-h-96 object-cover mt-5"/>

//             <div class = "flex items-center gap-5">
//                     <div class = "flex items-center gap-3 cursor-pointer text-xs">
//                             {liked ? <AiFillHeart /> : <AiOutlineHeart />}
//                     </div>
//                     <div >
//                             <AiOutlineComment />
//                     </div>
//                     <div>
//                             <BiShare />
//                     </div>
//             </div>
//         </div>
//     </div>



// <div class = "shadow-xs bg-slate-300 rounded-md overflow-x-auto" >
//     <div class = "p-5">
//         <div class = "flex items-center justify-between relative" >
//             <div class = "flex gap-5">
//                 <img src="post.user_post_desc.profileImage" alt="" class = "w-10 h-10 rounded-lg object-cover"/>
//                 <div class = "flex flex-col">
//                     <Link to = {`/profile/${post.user_post_desc.userId}`} class = "no-underline text-inherit">
//                         <span class = "font-medium">{post.user_post_desc.name}</span>

//                     </Link>
//                     <span class = "text-xs" >{post.createdAt}</span>
//                 </div>
//             </div>
//             <BiDotsHorizontalRounded/>
//         </div>
//         <div class = "m-5">
//             <p>{post.caption}</p>
//             <img src = "post.post" alt="" class = "w-full max-h-96 object-cover mt-5"/>

//         </div>
//         <div class = "flex items-center gap-5">
//             <div class = "flex items-center gap-3 cursor-pointer text-xs">
//                     {liked ? <AiFillHeart /> : <AiOutlineHeart />}
//             </div>
//             <div >
//                     <AiOutlineComment />
//             </div>
//             <div>
//                     <BiShare />
//             </div>
//         </div>
//     </div>

// </div>
//   )
// }

// export default Post

{/* <h3 class="text-2xl text-gray-700 font-bold mb-6 ml-3">Latest News</h3>

<ol >
  <li class="border-l-2 border-purple-600">
    <div class="md:flex flex-start">
      <div class="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
        </svg>
      </div>
      <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
        <div class="flex justify-between mb-4">
          <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">New Web Design</a>
          <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">04 / 02 / 2022</a>
        </div>
        <p class="text-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.</p>
        <button type="button" class="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">Preview</button>
        <button type="button" class="inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true">See demo</button>
      </div>
    </div>
  </li>
  <li class="border-l-2 border-green-600">
    <div class="md:flex flex-start">
      <div class="bg-green-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
        </svg>
      </div>
      <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
        <div class="flex justify-between mb-4">
          <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">21 000 Job Seekers</a>
          <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">12 / 01 / 2022</a>
        </div>
        <p class="text-gray-700 mb-6">Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae natus sapiente sit nam eaque, consectetur porro molestiae ipsam an deleniti.</p>
        <button type="button" class="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">Preview</button>
        <button type="button" class="inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true">See demo</button>
      </div>
    </div>
  </li>
  <li class="border-l-2 border-green-600">
    <div class="md:flex flex-start">
      <div class="bg-green-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
        </svg>
      </div>
      <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
        <div class="flex justify-between mb-4">
          <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">Awesome Employers</a>
          <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">21 / 12 / 2021</a>
        </div>
        <p class="text-gray-700 mb-6">Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit natus! Eum corporis illum nihil officiis tempore. Excepturi illo natus libero sit doloremque, laborum molestias rerum pariatur quam ipsam necessitatibus incidunt, explicabo.</p>
        <button type="button" class="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">Preview</button>
        <button type="button" class="inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true">See demo</button>
      </div>
    </div>
  </li>
</ol> */}