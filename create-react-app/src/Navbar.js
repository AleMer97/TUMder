import React from "react";
import { Link } from "react-router-dom";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ForumIcon from "@mui/icons-material/Forum";
import Avatar from "@mui/material/Avatar";

function Navbar({ selected, user }) {
  const [value, setValue] = React.useState(0);

  React.useEffect(
    (selected) => {
      selected === "profile"
        ? setValue(0)
        : selected === "chats"
        ? setValue(2)
        : setValue(1);
    },
    [selected]
  );

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={10}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Profile"
          icon={
            <Avatar
              alt="Profile Pic"
              src={user.image}
              sx={{ width: 24, height: 24 }}
            />
          }
          component={Link}
          to="/profile"
        />
        <BottomNavigationAction
          label="TUMder"
          icon={<PersonSearchIcon />}
          component={Link}
          to="/"
        />
        <BottomNavigationAction
          label="Chats"
          icon={<ForumIcon />}
          component={Link}
          to="/chats"
        />
      </BottomNavigation>
    </Paper>
  );
}

export default Navbar;
