import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

import Button from '@mui/material/Button';


import { students } from './data'
import theme from './theme';

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
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
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

  return (
    <Grid container direction='column' justifyContent='center'>
      <Grid item className='cardContainer'>
        {students.map((student, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={student.name}
            onSwipe={(dir) => swiped(dir, student.name, index)}
            onCardLeftScreen={() => outOfFrame(student.name, index)}
          >
            <Card sx={{ maxWidth: 400, position: 'fixed'}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  width='100%'
                  image={student.image}
                  alt="student"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {student.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {student.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </TinderCard>
        ))}
       
      </Grid>
      <Grid item className='buttons' sx={{height: 530}} alignItems='center'>
        <Typography align='center' variant='h5'>
           All swiped up!      
        </Typography>
      </Grid>

      <Grid container className='buttons' justifyContent='space-between'>
        <Button color="success" variant="outlined" style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left</Button>
        <Button  variant="outlined" style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo</Button>
        <Button  color="error" variant="outlined" style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Swipe right</Button>
      </Grid>
      {lastDirection ? (
        <h2 key={lastDirection} className='infoText'>
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className='infoText'>
          Swipe a card or press a button to get Restore Card button visible!
        </h2>
      )}
    </Grid>
  )
}