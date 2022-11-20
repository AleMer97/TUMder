import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Splash() {
  return (
    <div>
      <img
        src={"/static/FunnyPeople.png"}
        alt={"Cool picture"}
        loading="lazy"
        width="100%"
        style={{ borderRadius: "25px" }}
      />
      <Box
        sx={{ backgroundColor: "#3665A1", borderRadius: 15 }}
        style={{ border: 2, color: "white", textAlign: "center" }}
        m={4}
        p={1}
      >
        Find your
        <List>
          <ListItem>
            <Typography sx={{ ml: "25%" }} variant="h6">
              StudyBuddy
            </Typography>
          </ListItem>
          <ListItem>
            <Typography sx={{ ml: "25%" }} variant="h6">
              MensaFriend
            </Typography>
          </ListItem>
          <ListItem>
            <Typography sx={{ ml: "25%" }} variant="h6">
              Tandem
            </Typography>
          </ListItem>
        </List>
        ...or meet new students!
      </Box>
      <Box justifyContent="center" alignItems="center" m={1} display="flex">
        <Button variant="outlined" component={Link}
          to="/match">
          Let's get started!
        </Button>
      </Box>
    </div>
  );
}
