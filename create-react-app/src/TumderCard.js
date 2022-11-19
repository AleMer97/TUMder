import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SchoolIcon from '@mui/icons-material/School';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';

import { students } from './data'
import MatchModal from './MatchModal';

export default function TumderCards () {
  const [currentIndex, setCurrentIndex] = useState(students.length - 1)
  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  console.log(students)
  const childRefs = useMemo(
    () =>
      Array(students.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < students.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    // currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < students.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  // Modal logic
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleOpen = () => {
    setModalOpen(true)};
  const [currentStudent, setCurrentStudent] = React.useState(students[0]);

  return (
    <>
    <MatchModal setOpen={setModalOpen} open={modalOpen} student={currentStudent}/>
    <Grid container direction='column' justifyContent='center'>
      <Grid item className='cardContainer'>
        {students.map((student, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={student.name}
            onSwipe={(dir) => { 
              swiped(dir, student.name, index)
              setCurrentStudent(student)
            }}
            onCardLeftScreen={() => outOfFrame(student.name, index)}
            onCardRightScreen={() => outOfFrame(student.name, index)}
            flickOnSwipe
          >
            <Card sx={{ maxWidth: 400, position: 'fixed'}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="370"
                  width='100%'
                  image={student.image}
                  alt="student"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{color: '#0065bd'}}>
                    {student.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {student.description}
                  </Typography>
                  <List>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <SchoolIcon sx={{color: '#0065bd'}} />
                        </ListItemIcon>
                        <ListItemText primary={student.degree} secondary={student.semester} />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <EmojiFlagsIcon sx={{color: '#0065bd'}} />
                        </ListItemIcon>
                        <ListItemText primary={student.language} />
                      </ListItem>
                    </List>
                </CardContent>
              </CardActionArea>
            </Card>
          </TinderCard>
        ))}
       
      </Grid>
      <Grid item className='buttons' sx={{height: 630}} alignItems='center'>
        <Typography align='center' variant='h5'>
           All swiped up!      
        </Typography>
      </Grid>

      <Grid container className='buttons' justifyContent='space-between'>
        <Button 
          color="error" 
          variant="outlined" 
          style={{ backgroundColor: !canSwipe && '#c3c4d3' }} 
          onClick={() => swipe('left')}
        >
          Swipe left
        </Button>
        <IconButton 
           sx={{color: '#0065bd',  backgroundColor: !canGoBack && '#c3c4d3'}} 
           variant="outlined" onClick={() => goBack()}
           >
            <ReplayIcon fontSize="inherit" />
          </IconButton>
        <Button  
          color="success" 
          variant="outlined" 
          style={{ backgroundColor: !canSwipe && '#c3c4d3' }} 
          onClick={() => {
            swipe('left')
            handleOpen()}}>
            Swipe right
        </Button>
      </Grid>
    </Grid>
    </>
  )
}