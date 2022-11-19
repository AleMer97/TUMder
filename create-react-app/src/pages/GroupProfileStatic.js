import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Button, Grid, Switch } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";

export default function GroupProfile({ student }) {
  const [name, setName] = React.useState(student.name);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const [description, setDescription] = React.useState(student.description);

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const [checkedMensa, setMensa] = React.useState(student.searchesForMensa);
  const handleMensa = (event) => {
    setMensa(event.target.checked);
  };

  const [checkedStudy, setStudy] = React.useState(student.searchesForStudy);
  const handleStudy = (event) => {
    setStudy(event.target.checked);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item mb={3}>
        <Avatar
          alt="Profile Pic"
          src={student.image}
          sx={{ width: 150, height: 150 }}
        />
      </Grid>

      <Grid item mb={3}>
        <TextField
          sx={{ width: "300px" }}
          id="outlined-multiline-flexible"
          label="Name"
          maxRows={1}
          value={name}
          size="small"
          onChange={handleChangeName}
        />
      </Grid>

      <Grid item mb={3}>
        <TextField
          sx={{ width: "300px" }}
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
          sx={{ width: "300px" }}
          size="small"
          label="Languages"
          value={student.language}
        />
      </Grid>

      <Grid
        container
        spacing={1}
        sx={{ width: "300px" }}
        justifyContent="center"
        ml={0}
        mb={3}
      >
        <Grid container direction="row" justifyContent="space-between">
          <Grid item mb={3}>
            <TextField
              sx={{ width: "160px" }}
              size="small"
              label="Degree"
              value={student.degree}
            />
          </Grid>
          <Grid item mb={3}>
            <TextField
              sx={{ width: "125px" }}
              size="small"
              label="Semester"
              value={student.semester}
            />
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item>
            <TextField
              sx={{ width: "120px", marginLeft: 3 }}
              size="small"
              label="Age"
              value={student.age}
            />
          </Grid>
          <Grid item>
            <TextField
              sx={{ width: "120px", marginRight: 3 }}
              size="small"
              label="maxGroupSize"
              value={student.maxGroupSize}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item mt={-2} alignItems="flex-start">
        <FormGroup>
          <FormControlLabel
            value="start"
            control={<Switch color="primary" />}
            label="Mensa matches 🍴"
            labelPlacement="start"
            checked={checkedMensa}
            onChange={handleMensa}
          />
          <FormControlLabel
            value="start"
            control={<Switch color="primary" />}
            label="Study matches 📚"
            labelPlacement="start"
            checked={checkedStudy}
            onChange={handleStudy}
          />
        </FormGroup>
      </Grid>

      <Grid item>
        <Button sx={{ border: 2, borderRadius: 1 }}>Edit</Button>
      </Grid>
    </Grid>
  );
}
