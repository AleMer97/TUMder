import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { Typography } from '@mui/material';
import theme from '../theme';

export default function Chats() {
  return (
  <>
    <Typography sx={{color:'#3070B3'}} variant='h4'>Chats</Typography>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem divider>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="TUMler learn group" secondary="Hey guys, let's meet at room 08.13...." />
      </ListItem>
      <ListItem divider>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Fresh Hermann" secondary="Need to study DS very hard, last try fo..." />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Maik Lonely" secondary="Are you up for a mensa today?" />
      </ListItem>
    </List>
  </>
  );
}
