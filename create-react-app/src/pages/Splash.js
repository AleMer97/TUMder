import React from "react";
import Box from '@mui/material/Box'
import { Button } from "@mui/material";

export default function Splash() {
  return (
    <div>
      <img
        src={'/static/FunnyPeople.png'}
        alt={"Cool picture"}
        loading="lazy"
        width="100%"
        style={{borderRadius:'25px'}}
      />
      <Box 
        sx={{backgroundColor: '#3665A1', borderRadius: 15}}
        style={{border:2, color:'white', textAlign:'center'}}
        m={4}
        p={1}
      >
      Find your
        <ul>
          <li>StudyBuddy</li>
          <li>MensaFriend</li>
          <li>Tandem</li>
        </ul>
        ...or meet new students!
      </Box>
      <Box 
        justifyContent="center" 
        alignItems="center" 
        m={1}
        display="flex"
      >
        <Button variant="outlined"
          href="/match"
        >
          Let's get started!
        </Button>
      </Box>
    </div>
  );
}
