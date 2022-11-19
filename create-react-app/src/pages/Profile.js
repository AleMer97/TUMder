import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from '../ProTip';
import Avatar from '@mui/material/Avatar';
import { Button, Grid, Switch } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

export default function Profile() {

  const [name, setName] = React.useState('Robert');

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const [description, setDescription] = React.useState('Single and ready to mingle');

  const handleChangeDescription = (event) => {
    setDescription(event.target.name);
  };

  return (
    <Grid 
      container 
      direction="column" 
      sx={{ my: 4 }}
      justifyContent="flex-start"
      alignItems="center"
      spacing={3}
    >
      <Grid item>
        <Avatar sx={{ width: 56, height: 56 }}>OP</Avatar>
        <Button >Edit</Button>
      </Grid>
      
      <Grid item>
          <TextField
            id="outlined-multiline-flexible"
            label="Name"
            maxRows={1}
            value={name}
            onChange={handleChangeName}
          />
      </Grid>
      <Grid item>
          <TextField
            id="outlined-multiline-flexible"
            label="Description"
            multiline
            maxRows={5}
            minRows={3}
            value={description}
            onChange={handleChangeDescription}
          />
      </Grid>
      <Grid item>
        <FormGroup>
          <FormControlLabel
            value="start"
            control={<Switch color="primary" />}
            label="Mensa"
            labelPlacement="start"
          />        
        </FormGroup>
      </Grid>
    </Grid>
  );
}
