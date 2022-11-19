import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#3070B3',
  boxShadow: 24,
  borderRadius: "15px",
  p: 4,
};

export default function MatchModal({student, setOpen, open}) {
  
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} alignItems='center'>
          <Typography id="modal-modal-title" variant="h5" color="white" textAlign='center' mb={2}>
            It's a Match! 🤓🎉
          </Typography>

          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                width="150"
                image={student.image}
                alt="student"
              />
              
            </CardActionArea>
          </Card>
          <Typography id="modal-modal-description" sx={{ mt: 1, mb: 2 }} variant='h6' color="white">
            {student.name} wants to chat with you
          </Typography>
          <Grid container justifyContent="space-around" mb={2}>
          <Button 
            color="success" 
            variant="contained" 
            onClick={() => null}
          >
            Start Chatting 💬
          </Button>
          <Button 
            color="success" 
            variant="contained" 
            onClick={() => null}
          >
            Open Group 👥
          </Button>
         
          </Grid>
          {/* <Grid container justifyContent="space-around">
            <IconButton 
              size='large'
              sx={{bgColor: "error"}}
              color="error" 
              onClick={() => handleClose()}
            >
              <HighlightOffIcon  fontSize='inherit'/>
            </IconButton>
          </Grid> */}
          
        </Box>
      </Modal>
    </div>
  );
}