import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ComicCardDetail from "./comic.card.detail";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '15px',
    marginBottom: '15px',
  },
  title: {
    marginLeft: 15,
    marginBottom: 15
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  card: {
    width: 171,
    height: 243,
    borderRadius: 10,
    marginLeft: 15
  },
  media: {
    height: 143,
  },
}));

export default function ComicsCard({ items }) {
  const classes = useStyles();
  const comics = items ? items : [];
  const [openDetail, setOpenDetail] = useState(false);
  const [selectedComic, setSelectedComic] = useState({});

  const close = () => {
    setOpenDetail(false);
  };

  const open = (comic) => {
    console.log('comic: ', comic);
    setSelectedComic(comic);
    setOpenDetail(true);
  }

  return (
    <div className={classes.root}>
      <Typography variant="h3" component="h3" className={classes.title}>
        related comics_
      </Typography>
      <div className={classes.cardContainer}>
      {comics.map((comic) => (
          <Card className={classes.card} key={comic.id} onClick={() => open(comic)}>
          <CardActionArea>
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
          </CardActionArea>
        </Card>
      ))}
      </div>

    {openDetail && <ComicCardDetail open={openDetail} onClose={close} comic={selectedComic}></ComicCardDetail>}

    </div>
  );
}
