// not used in final 

import * as React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SendIcon from "@mui/icons-material/Send";
import Paper from "@mui/material/Paper";

import TextField from "@mui/material/TextField";

import { Link } from "react-router-dom";

export default function Chats() {
  const messages = ["foo", "hu", "ju"];

  const [message, setMessage] = React.useState("");

  const [receivedMessages, setReceivedMessages] = React.useState(messages);

  const sendMessage = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React POST Request Example" }),
    };
    fetch("https://reqres.in/api/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }));
  };

  const getMessages = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setReceivedMessages({
          items: json,
          DataisLoaded: true,
        });
      });
  };

//   React.useEffect(getMessages, [])

  return (
    <>
      <Button startIcon={<ArrowBackIosNewIcon />} component={Link} to="/chats">
        Back
      </Button>
      <Grid container alignItems="center" direction="column">
        <Typography sx={{ color: "#3070B3" }} variant="h4">
          Chat with Lisa
        </Typography>
        <Paper variant="outlined" sx={{ width: "100%", height: "100%" }}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {messages.map((message) => (
              <ListItem key={message}>
                <ListItemText primary={message} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid container direction="row" sx={{ position: "fixed", bottom: 80 }}>
        <Grid item xs={9}>
          <TextField
            sx={{ width: "100%" }}
            id="standard-basic"
            label="Your message"
            variant="standard"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Button endIcon={<SendIcon />} onClick={sendMessage()}>
            Send
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
