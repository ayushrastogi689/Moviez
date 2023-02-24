import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Movie1 = ({ movie }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={movie.Poster}
        title={movie.Title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {movie.Title}
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <PlayCircleOutlineIcon />
          <AddCircleOutlineIcon />
        </div>
      </CardContent>
    </Card>
  );
};

export default Movie1;
