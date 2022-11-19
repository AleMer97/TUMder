import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function TumderCard({student}) {
   
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            image="/static/tumStudent1.jpg"
            alt="green iguana"
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
    );
  }
