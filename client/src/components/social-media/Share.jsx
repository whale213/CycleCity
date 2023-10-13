import React from "react";
import { useContext, useState } from "react";
// import { useMutation } from "@tanstack/react-query";
// import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import http from "../../http";
import { BsCardImage } from "react-icons/bs";
import { useFormik } from "formik";

function Share() {
  // const [post, setPost] = useState("as")
  const [caption, setCaption] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      userId: 2,
      caption: caption.trim(),
      post: post.trim(),
    };

    http
      .post("/userpost", data)
      .then((res) => {
        console.log(res.data);
        // Handle successful response or perform any necessary actions
      })
      .catch((error) => {
        console.error(error);
        // Handle error response or display an error message
      });
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  return (
    <Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="bg-slate-400 rounded-md min-h-fit mt-5"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={8} className="min-w-[95%] ml-5 ">
            <TextField
              fullWidth
              margin="normal"
              multiline
              minRows={2}
              label="New Post"
              name="caption"
              value={caption}
              onChange={handleCaptionChange}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ textAlign: "center", mt: 2 }}>
              {/* {
                                post && (
                                    <AspectRatio sx={{ mt: 2 }}>
                                        <Box component="img" alt="tutorial"
                                            src={`${import.meta.env.VITE_FILE_BASE_URL}${post}`}>
                                        </Box>
                                    </AspectRatio>
                                )
                            } */}
            </Box>
          </Grid>
        </Grid>
        <Box className="">
          <Button
            variant="contained"
            type="submit"
            className="align-middle ml-2"
          >
            Upload
          </Button>
          <Button
            variant="contained"
            component="label"
            className="align-middle ml-3"
          >
            Add Image
            {/* <input hidden accept="image/*" multiple type="file"
                        onChange={onFileChange} /> */}
          </Button>
        </Box>
      </Box>

      {/* <ToastContainer /> */}
    </Box>
  );
}

export default Share;

// <div className=" mt-20 mx-auto min-w-full   ">
//     <div className="w-full px-3">
//         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
//             Your Message
//         </label>
//         <textarea rows="10"
//             className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
//     </div>
//     <div className="flex justify-between w-full px-3">
//         <div className="md:flex md:items-center">
//         </div>
//         <button className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded " type="submit">
//             Send Message
//         </button>
//     </div>
// </div>

// const formik = useFormik({
//     initialValues: {
//         caption: ""
//     },
//     onSubmit: (post) => {
//         const data = {
//             postID: post.postID,
//             userId: 2,
//             caption: values.caption.trim()
//         };
//         data.caption = data.caption.trim();
//         http.post("/userpost", data)
//             .then((res) => {
//                 console.log(res.data);
//                 navigate("/userpost");
//             });
//     }
// });
