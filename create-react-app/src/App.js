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
import Chats from './pages/Chats';
import NoPage from './pages/NoPage';

import TumderCards from './TumderCard';
import Navbar from './Navbar';
import { students } from './data';

export default function App() {

  const [user, setUser] = React.useState(students[4])

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
                    <Route path="/profile" element={<Profile student={user}/>}/>
                    <Route path="/" element={<Home user={user}/>}/>
                    <Route path="*" element={<NoPage />}/>
                  </Routes>
                  <Navbar selected="TUMder" user={user}/>
              </Grid>
          </Grid>
        </Box>
      </Container>
    </Router>
    
  );
}

function Home({user}) {
  return (
    <TumderCards filteredUser={user}/>         
  );
}
