import React, { useState, useEffect, useContext } from 'react'
import http from "../../http";
import UserContext from '../../context/UserContext';

function PostUserProfile({ userId }) {
    const [followerList, setFollowerList] = useState([])
    const [followingList, setFollowingList] = useState([])
    const [myFollowingList, setMyFollowingList] = useState([])
    const [postList, setPostList] = useState([])
    // const [user, setUser] = useState("")

    // const myUserID = 2;
    const { myUserID } = useContext(UserContext);

    const getFollowers = () => {
        http.get(`/followers/myfollowers/${userId.id}`).then((res) => {
            setFollowerList(res.data);
        });
    };

    const getFollowing = () => {
        http.get(`/followers/${userId.id}`).then((res) => {
            setFollowingList(res.data);
        });
    };

    const getPost = () => {
        http.get(`/post/user/${userId.id}`).then((res) => {
            setPostList(res.data)
        })
    }

    const getUser = () => {
        http.get(`/user/${userId.id}`).then((res) => {
            setUser(res.data)
        })
    }

    const getMyFollowing = () => {
        http.get(`/followers/${myUserID.userId}`).then((res) => {
            setMyFollowingList(res.data);
        });
    };
    // console.log(myFollowingList)


    const handleUnfollow = (followerID) => {
        http.delete(`/followers/${followerID}`).then((res) => {
            console.log(res.data);
        });
        window.location.reload(true);
    }

    const handleFollow = () => {
        const data = {}
        data.followeruserID = myUserID.userId
        data.followeduserID = user.userId
        http.post("/followers", data).then((res) => {
            console.log(res.data)
        })
        window.location.reload(true);

    }




    const isFollowing = myFollowingList.some(item => item.followeduserID === user.userId);


    useEffect(() => {
        getMyFollowing();
        getFollowing();
        getPost();
        getFollowers();
        getUser();
    }, []);

    return (
        <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
            <div className="px-6">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full flex justify-center">
                        <div className="relative">
                            <img src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true" className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />
                        </div>
                    </div>
                    <div className="w-full text-center mt-20">
                        <div className="flex justify-center lg:pt-4 pt-8 pb-0 text-center">
                            <div className="p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">{postList.length}</span>
                                <span className="text-sm text-slate-400">Posts</span>
                            </div>
                            <div className="p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">{followerList.length}</span>
                                <span className="text-sm text-slate-400">Followers</span>
                            </div>

                            <div className="p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">{followingList.length}</span>
                                <span className="text-sm text-slate-400">Following</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-2">
                    <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">{user.name}</h3>
                </div>
                <div className="mt-6 py-6 border-t border-slate-200 text-center">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4">
                            <p className="font-light leading-relaxed text-slate-600 mb-4">{user.bio}</p>

                            {isFollowing ? (
                                <button
                                    href="javascript:;"
                                    className="font-normal text-slate-700 hover:text-slate-400"
                                    onClick={() => handleUnfollow(myFollowingList.find(item => item.followeduserID === user.userId).followerID)}
                                >
                                    Unfollow Account
                                </button>
                            ) : (
                                <button
                                    href="javascript:;"
                                    className="font-normal text-slate-700 hover:text-slate-400"
                                    onClick={() => handleFollow()}
                                >
                                    Follow Account
                                </button>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default PostUserProfile