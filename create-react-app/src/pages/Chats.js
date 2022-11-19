import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import { chats } from '../data';

export default function Chats() {
  return (
  <>
    <Typography sx={{color:'#3070B3'}} variant='h4'>Chats</Typography>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {
        chats.map((chat) => (
        <ListItem divider key={chat.display}>
          <ListItemAvatar>
            <Avatar src={chat.image}/>
          </ListItemAvatar>
          <ListItemText primary={chat.name} secondary={chat.display} />
        </ListItem>
        ))
      }
    </List>
  </>
  );
}
