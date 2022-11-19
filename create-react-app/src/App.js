import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Profile from './pages/Profile';
import Chats from './pages/Chats'

import TumderCards from './TumderCard'
import Navbar from './Navbar'

export default function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box >
          <Grid container direction='column' alignItems='stretch' >
              <Grid item sx={{textAlign: 'center'}}>
                <img src='/static/TUMder.jpg'/>
              </Grid>
              <Grid item>
                  {/* A <Routes> looks through its children <Route>s and
                      renders the first one that matches the current URL. */}
                  <Routes>
                    <Route path="/chats" element={<Chats/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/" element={<Home />}/>
                  </Routes>
                  <Navbar selected="TUMder"/>
              </Grid>
          </Grid>
        </Box>
      </Container>
    </Router>
    
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Home() {
  
  return (
    <TumderCards/>         
  );
}
