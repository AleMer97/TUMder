import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from '../ProTip';
import Avatar from '@mui/material/Avatar';

export default function Profile() {

 
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Avatar sx={{ width: 56, height: 56 }}>OP</Avatar>
        
      </Box>
    </Container>
  );
}
