import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from './ProTip';
import TinderCard from 'react-tinder-card'
import TumderCard from './TumderCard'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Profile from './pages/Profile';

import TumderCards from './TumderCard'
import Navbar from './Navbar'

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/chats" element={<Users />}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/" element={<Home />}/>
        </Routes>
        <Navbar selected="TUMder"/>
      </div>
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
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          TUMder
        </Typography>
        {/* {students.map(student => <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']} key={student.name}><TumderCard student={student}/></TinderCard>)} */}
        <TumderCards/>

      </Box>
    </Container>
  );
}
