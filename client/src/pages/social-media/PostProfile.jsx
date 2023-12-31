import React from 'react'
import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom"
import PostUserProfile from "../../components/social-media/PostUserProfile.jsx";
import Post from "../../components/social-media/Post.jsx";
import Modal from "../../components/modal/Modal";
import http from "../../http";
import Profile from "../../components/social-media/Profile.jsx";
import SearchBar from "../../components/social-media/SearchBar";
import UserContext from '../../context/UserContext';


function PostProfile() {
    const [postList, setPostList] = useState([])
    const [followerList, setFollowerList] = useState([]);
    const [followingList, setFollowingList] = useState([]);
    const [userList, setUserList] = useState([]);


    const userId = useParams();

    const { myUser } = useContext(UserContext);


    const getUsers = () => {
        http.get("/user").then((res) => {
            setUserList(res.data);
        });
    };

    const getFollowing = () => {
        http.get(`/followers/${myUser.userId}`).then((res) => {
            console.log(res.data);
            setFollowingList(res.data);
        });
    };

    const getFollowers = () => {
        http.get(`/followers/myfollowers/${myUser.userId}`).then((res) => {
            console.log(res.data);
            setFollowerList(res.data);
        });
    };

    const getPost = () => {
        http.get(`/post/user/${userId.id}`).then((res) => {
            setPostList(res.data)
        })
    }

    useEffect(() => {
        getPost();
        getFollowing();
        getFollowers();
        getUsers();
    }, []);

    return (
        <section className="h-screen w-[75%] flex flex-col-reverse sm:flex-row min-h-0 min-w-0 mx-auto ml-6">
            <main className="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto overflow-x-clip">
                <section className="flex-1 pt-3 md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0 ">
                    <div className="flex flex-col lg:flex-row h-full w-full ">
                        <div className="h-full w-full lg:flex-1 px-3 min-h-0 min-w-0">
                            <div className="w-full h-full min-h-0 min-w-0 overflow-auto overflow-x-clip no-scrollbar">
                                <div className="bg-transparent w-screen h-2"></div>

                                <div className="flex flex-col space-y-4 w-full h-64 place-items-center min-w-fit">
                                    <div className="flex items-center place-content-center mb-14">
                                        <SearchBar placeholder="Search user" data={userList} />
                                        <Link to="http://localhost:5173/user/addpost" className="ml-10">
                                            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                                                <div className="absolute inset-0 w-3 bg-ultraViolet transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                                <span className="relative text-black group-hover:text-white">Add Post</span>
                                            </button>
                                        </Link>
                                    </div>
                                    <PostUserProfile userId={userId} />
                                    {postList.map((post, i) =>
                                        <Post
                                            post={post}
                                            key={post.postID}
                                            className="mx-auto min-w-full"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="pb-2 lg:pb-0 w-full lg:max-w-sm px-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap">
                            <div className="text-seashell bg-ultraViolet w-full min-h-fit min-w-0 mb-4 rounded-lg p-4">
                                My Friends
                                <ul>
                                    {followingList.map((following, i) => {
                                        const follower = followerList.find(follower => follower.followeruserID === following.followeduserID);

                                        if (follower) {
                                            return (
                                                <div key={i}>

                                                    <Profile follower={follower} key={follower.followerID} />

                                                </div>
                                            );
                                        } else {
                                            return null;
                                        }
                                    })}



                                </ul>
                            </div>
                            <div className="text-grey bg-thistle w-full h-24 min-h-0 min-w-0 mb-4 rounded-lg p-4">
                                Suggestions
                            </div>
                        </div>
                    </div>
                    <Modal>

                    </Modal>

                </section>
            </main>
        </section>




    )
}

export default PostProfile