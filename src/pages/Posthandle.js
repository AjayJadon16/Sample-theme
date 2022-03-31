import React, { useState } from "react";
import Post from "./Post";
import DisplayPosts from "./DisplayPosts";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Posthandle = () => {
  const [titlelist, settitlelist] = useState([]);
  const [postlist, setpostlist] = useState([]);
  const [bloglist, setbloglist]=useState([])
  // const addpost = (Postname) => {
  //   setpostlist((prevPostList) => {
  //     return [
  //       ...prevPostList,
  //       { postname: Postname, id: Math.random().toString() },
  //     ];
  //   });
  // };
  // const addtitle = (Titlename) => {
  //   settitlelist((prevTitleList) => {
  //     return [
  //       ...prevTitleList,
  //       { titlename: Titlename, id: Math.random().toString() },
  //     ];
  //   });
  // };
  const addblog=(Postname,Titlename)=>{
    setbloglist((prevBlogList)=>{
      return [...prevBlogList,{ titlename: Titlename, id: Math.random().toString() },{ postname: Postname, id: Math.random().toString() },
      ];
    });
  };

  console.log(bloglist)
  
  return (
    <div>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Post  onAddtitle = {addtitle} onAddpost={addpost}/> */}
        <Post onAddblog={addblog}/>

        </Box>
        <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <DisplayPosts item={bloglist} />
        
      </Box>
    </div>
  );
};
export default Posthandle;
