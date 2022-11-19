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

import {students} from '../data';

export default function Profile() {

  const student = 5;

  const [name, setName] = React.useState(students[student].name);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const [description, setDescription] = React.useState(students[student].description);

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  return (
    <Grid 
      container 
      direction="column" 
      // sx={{ my: 4 }}
      justifyContent="center"
      alignItems="center"
      // spacing={3}
    >
      <Grid item mb={3}>
        <Avatar
          alt="Profile Pic"
          src={students[student].image}
          sx={{ width: 150, height: 150}}
        />
      </Grid>
      <Grid item sx={{mt:-4}}>
        <Button >Edit</Button>
      </Grid>
      
      <Grid item mb={3}>
          <TextField
            id="outlined-multiline-flexible"
            label="Name"
            maxRows={1}
            value={name}
            onChange={handleChangeName}
          />
      </Grid>

      <Grid item mb={3}>
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

      <Grid item mb={3}>
        <TextField
          size="small"
          label="Semester"
          value={students[student].semester}
        />
      </Grid>

      <Grid 
        container 
        spacing={1} 
        justifyContent="center" 
        mb={3} 
      >
        <Grid item>
          <TextField
            size="small"
            label="Age"
            value={students[student].age}
          />
        </Grid>
        <Grid item>
          <TextField
            size="small"
            label="maxGroupSize"
            value={students[student].maxGroupSize}
          />
        </Grid>        
      </Grid>

      
      <Grid item mb={3}>
        <FormGroup>
          <FormControlLabel
            value="start"
            control={<Switch color="primary" />}
            label="Mensa matches"
            labelPlacement="start"
            checked={students[student].searchesForMensa}
          />
          <FormControlLabel
            value="start"
            control={<Switch color="primary" />}
            label="Study matches"
            labelPlacement="start"
            checked={students[student].searchesForStudy}
          />        
        </FormGroup>
      </Grid>
    </Grid>
  );
}
