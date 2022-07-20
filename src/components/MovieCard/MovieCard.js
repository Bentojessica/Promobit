import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const MovieCard = (props) => {
    return( <Card sx={{ maxWidth: 345 }} onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image= {props.poster}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.title}
          </Typography>
          <Typography variant="body2" color="text.primary">
          {props.date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>   
    )
}