import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
// import AspectRatio from "@mui/joy/AspectRatio";
import http from "../../http";



export default function Comments() {
    // const post = {
    //     postID: 2,
    //     caption: "AWAWDAWDAWDAWDAWD",
    //     post: "HELLLOOOO",
    //     createdAt: "2023-07-05",
    //     updatedAt: "2023-07-03 19:57:32",
    //     userId: 2
    // }
  const [commentsList, setCommentsList] = useState([]);
  const [likeList, setLikeList] = useState([]);


  const postID = useParams();
 

  const getComments = () => {
    http.get(`/comments/${postID}`).then((res) => {
      console.log(res.data);
      setCommentsList(res.data);
    });
  };
  
  const getLikes = () => {
    http.get(`/likes/${postID}`).then((res) => {
      console.log(res.data);
      setLikeList(res.data);
    });
  };


  useEffect(() => {
    getComments();
    getLikes();
  }, []);


  return (
        <div class="bg-white m-4 rounded-2xl overflow-hidden shadow-none">
            <div class="grid grid-cols-3 min-w-full">

                <div class="col-span-2 w-full">
                    <img class="w-full max-w-full min-w-full"
                        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="Description"/>
                </div>

                <div class="col-span-1 relative pl-4">
                    <header class="border-b border-grey-400">
                        <a href="#" class="block cursor-pointer py-4 flex items-center text-sm outline-none focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" class="h-9 w-9 rounded-full object-cover"
                            alt="user" />
                            {/* <p class="block ml-2 font-bold">{post.user_post_desc.name}</p> */}
                            <p class="block ml-2 font-bold">Sharan</p>
                        </a>
                    </header>

                    <div >
                        {commentsList.map((comment, i) => 
                            <div class="text-sm mb-2 flex flex-start items-center">
                                <div>
                                    <a href="#" class="cursor-pointer flex items-center text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                                        <img class="h-8 w-8 rounded-full object-cover"
                                        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                        alt="" />
                                    </a>
                                </div>
                                <p class="font-bold ml-2">
                                    <a class="cursor-pointer">
                                        {comment.name}
                                        </a>
                                    <span class="text-gray-700 font-medium ml-1">
                                        {comment.comment}
                                    </span>
                                </p>
                            </div>
                            
                        )}
                    </div>

                    <div class="absolute bottom-0 left-0 right-0 pl-4">
                        <div class="pt-4">
                            <div class="mb-2">
                                <div class="flex items-center">
                                    <span class="mr-3 inline-flex items-center cursor-pointer">
                                        <svg class="fill-heart text-gray-700 inline-block h-7 w-7 heart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </span>
                                    <span class="mr-3 inline-flex items-center cursor-pointer">
                                        <svg class="text-gray-700 inline-block h-7 w-7 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </span>
                                </div>
                                <span class="text-gray-600 text-sm font-bold">{likeList.length} Likes</span>
                            </div>
                            <span class="block ml-2 text-xs text-gray-600">{likeList.createdAt}</span>
                        </div>

                        <div class="pt-4 pb-1 pr-3">    
                            <div class="flex items-start">
                                <textarea class="w-full resize-none outline-none appearance-none" aria-label="Agrega un comentario..." placeholder="Enter Comment"  autocomplete="off" autocorrect="off"></textarea>
                                <button class="mb-2 focus:outline-none border-none bg-transparent text-blue-600">Enter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
};