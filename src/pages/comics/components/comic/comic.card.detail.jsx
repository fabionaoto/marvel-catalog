import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Avatar, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '15px',
    marginBottom: '15px'
  },
  container: {
    display: 'flex'
  },
  card: {
    width: 171,
    height: 240,
    borderRadius: 10,
  },
  media: {
    height: 140,
  },
}));

export default function ComicCardDetail({
  open,
  onClose,
  comic
}) {
  const theme = useTheme();
  const classes = useStyles();

  const handleClose = () => {
    onClose(false);
  };

  return (
      <Dialog
        open={open}
        onClose={handleClose} 
        aria-labelledby="comic-card-detail-title"
        className={classes.root}
        fullWidth={true}
        maxWidth={'md'}
      >
        
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item lg={3}>
              <Card className={classes.card} key={comic.id}>
                  <CardMedia  
                    className={classes.media}
                    image={`${comic.thumbnail.path}/${'portrait_incredible'}.${comic.thumbnail.extension}`}
                    title="Comic Image"
                  />
                  <CardContent className={classes.title}>
                    <Typography gutterBottom variant="h6" component="h6">
                      {comic.title}
                    </Typography>
                  </CardContent>
              </Card>
            </Grid>

            {comic.description !== null && 
            <Grid item lg={4}>
              <Typography gutterBottom variant="h5" component="h5">
                Description
              </Typography>
              <Typography gutterBottom variant="h6" component="h6">
                {comic.description}
              </Typography>
            </Grid>}

            <Grid item lg={4}>
              <Typography gutterBottom variant="h5" component="h5">
                Creators
              </Typography>
              {comic.creators.items.map((creator, index) => (
                <Typography gutterBottom variant="h6" component="h6">
                {creator.name}
              </Typography>
              ))}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
  );
}