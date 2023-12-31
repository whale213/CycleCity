import React from "react";
import { useState, useEffect, useContext } from "react";
// import AspectRatio from "@mui/joy/AspectRatio";
import http from "../../http";
import Post from "../../components/social-media/Post.jsx";
import Share from "../../components/social-media/Share.jsx";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../../components/modal/Modal";
// import { Link } from "react-router-dom";
import Profile from "../../components/social-media/Profile.jsx";
import { LuSearch } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import SearchBar from "../../components/social-media/SearchBar";
import UserContext from '../../context/UserContext';





const Posts = () => {
  const [postList, setPostList] = useState([]);
  const [followerList, setFollowerList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [userList, setUserList] = useState([]);
  const [search, setSearch] = useState("");
  const { myUser } = useContext(UserContext);

  console.log(myUser)


  // useEffect(() => {
  //     http.get('/userpost').then((res) => {
  //     console.log(res.data);
  //     setPostList(res.data);
  //     });
  //     }, []);

  // const onClick = () => {
  //   navigate(`user/addpost`);
  // }

  const getUsers = () => {
    http.get("/user").then((res) => {
      setUserList(res.data);
    });
  };

  const searchUsers = () => {
    http.get(`/user?search=${search}`).then((res) => {
      setUserList(res.data);
    });
  };

  const getPosts = () => {
    http.get(`/userpost/${myUser.userId}`).then((res) => {
      console.log(res.data);
      setPostList(res.data);
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

  useEffect(() => {
    getUsers();
    getPosts();
    getFollowing();
    getFollowers();
  }, []);

  console.log(postList)

  return (
    <section className="h-screen w-[75%] flex flex-col-reverse sm:flex-row min-h-0 min-w-0 mx-auto ml-6">
      <main className="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto overflow-x-clip">
        <section className="flex-1 pt-3 md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0 ">
          <div className="flex flex-col lg:flex-row h-full w-full ">
            <div className="h-full w-full lg:flex-1 px-3 min-h-0 min-w-0">
              <div className="w-full h-full min-h-0 min-w-0 overflow-auto overflow-x-clip no-scrollbar">
                <div className="bg-transparent w-screen h-2"></div>
                <div className="flex flex-col space-y-4 w-full h-64 place-items-center min-w-fit">
                  <div className="flex items-center place-content-center">
                    <SearchBar placeholder="Search user" data={userList} />
                    <Link to="http://localhost:5173/user/addpost" className="ml-10">
                      <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                        <div className="absolute inset-0 w-3 bg-ultraViolet transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <span className="relative text-black group-hover:text-white">Add Post</span>
                      </button>
                    </Link>
                  </div>
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
              <div></div>
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
};

export default Posts;

// <p>Hello</p>
{
  /* <Box>
<Grid container spacing={2}>
    {
        postList.map((post, i) => {
            return (
                <Grid item xs={12} md={6} lg={4} key={post.id}>
                    <Card>
                        {
                            post.post && (
                                <AspectRatio>
                                    <Box component="img"
                                        src={`${import.meta.env.VITE_FILE_BASE_URL}${post.post}`}
                                        alt="tutorial">
                                    </Box>
                                </AspectRatio>
                            )
                        }
                        <CardContent>
                            <Box sx={{ display: 'flex', mb: 1 }}>
                                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                                    {post.caption}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
                                color="text.secondary">
                                {/* <AccountCircle sx={{ mr: 1 }} /> */
}
//                                 <Typography>
//                                     {post.user_post_desc.name}
//                                 </Typography>
//                             </Box>
//                             <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
//                                 color="text.secondary">
//                                 {/* <AccessTime sx={{ mr: 1 }} /> */}
//                                 <Typography>
//                                     {/* {dayjs(post.createdAt).format(global.datetimeFormat)} */}
//                                 </Typography>
//                             </Box>
//                             <Typography sx={{ whiteSpace: 'pre-wrap' }}>
//                                 {post.caption}
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             );
//         })
//     }
// </Grid>
// </Box> */}
