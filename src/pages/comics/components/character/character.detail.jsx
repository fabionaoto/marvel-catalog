import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import useCharacterHok from "../hooks/character.hook";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '70px',
    marginBottom: '70px',
    width: '100%',
    display: 'flex',
  },
  description: {
    width: '60% '
  },
  characterImage: {
    width: '25%',
    display: 'flex',
  },
  media: {
    width: 250,
    height: 250,
    borderRadius: 125 
  },
  button: {
    marginTop: theme.spacing(1)
  },
}));

export default function CharacterDetail({ character }) {
  const classes = useStyles();
  const characterHook = useCharacterHok(character);
  const [isFavorite, setIsFavorite] = useState(characterHook.favorites.filter(x => x.id === character.id).length > 0);

  useEffect(() => {
    setIsFavorite(characterHook.favorites.filter(x => x.id === character.id).length > 0);
  }, [character]);

  const favorite = () => {
    !isFavorite ? characterHook.updateCharacterFavorite(character) : characterHook.removeCharacterFavorite(character);
    setIsFavorite(!isFavorite);
  }
  
  return (
    <div className={classes.root}>
      
      <div className={classes.characterImage}>
      <CardMedia  
          className={classes.media}
          image={`${character.thumbnail.path}/${'portrait_incredible'}.${character.thumbnail.extension}`}
          title="Comic Image"
        />
      </div>
      <div className={classes.description}>
        <Typography variant="h1" component="h1" gutterBottom >
          {character.name}
        </Typography>
        <Typography variant="h4" component="h4" gutterBottom >
          {character.description}
        </Typography>
        <Button
        variant="contained"
        color={isFavorite ? "secondary" : "primary"}
        className={classes.button}
        onClick={favorite}
        startIcon={isFavorite ? <StarIcon /> :  <StarBorderIcon />}
      >
        {isFavorite ? "Unfavorite" : "Favorite"}
      </Button> 
      </div>
    </div>
  );
}
