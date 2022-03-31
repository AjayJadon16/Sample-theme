import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Post = (props) => {
  const [enteredpost, setenteredpost] = useState("");
  const [enteredtitle, setenteredtitle] = useState("");
  const [posterror, setposterror] = useState("");
  const [titleerror, settitleerror] = useState("");
  const posthandler = (event) => {
    setenteredpost(event.target.value);
  };
  const titlehandler = (event) => {
    setenteredtitle(event.target.value);
  };

  const addposthandler = (event) => {
    event.preventDefault();
    setposterror("");
    settitleerror("");
    if (enteredtitle.trim().length < 1) {
      // <span role= "alert">Title Too short</span>;
      settitleerror("Empty Title");
    } else if (enteredpost.trim().length < 1) {
      // <span role= "alert">Too short</span>;
      setposterror("Empty Description");
    } else if (enteredpost.trim().length > 500) {
      // <span role= "alert">Too long</span>;
      setposterror("Description Too Long");
    } else if (enteredtitle.trim().length > 50) {
      // <span role= "alert">Title Too long</span>;
      settitleerror("Title Too Long");
    } else {
      // props.onAddtitle(enteredpost);
      // props.onAddpost(enteredtitle);
      props.onAddblog(enteredpost, enteredtitle);
      setenteredpost("");
      setenteredtitle("");
    }
  };

  return (
    <div>
      <form onSubmit={addposthandler}>
       
        <Typography component="h1" variant="h3">
            Enter Your Post
          </Typography>
        <br></br>
        <TextField
          id="title"
          name="title"
          margin="normal"
          fullWidth
          label="Title"
          type="text"
          onChange={titlehandler}
          value={enteredtitle}
        />
        {titleerror}

        <TextField
          id="description"
          name="description"
          margin="normal"
          fullWidth
          label="Description"
          multiline
          rows={6}
          type="text"
          onChange={posthandler}
          value={enteredpost}
        />
        {posterror}
        <Grid container spacing={1}>
          <Button type="submit" variant="contained" sx={{ mt: 4, mb: 3 }}>
            Add Post
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default Post;
