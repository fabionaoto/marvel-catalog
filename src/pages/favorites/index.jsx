import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useCharacterHok from './../comics/components/hooks/character.hook';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TopBar from "../../components/topbar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  container: {
    width: '1440px'
  },
  name: {
    height: 40, 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginTop: '70px',
    marginBottom: '15px',
  },
  cards: {
    display: 'flex',
    '& div:not(:first-child)': {
      marginLeft: 15
    }
  },
  card: {
    width: 171,
    height: 243,
    borderRadius: 10,
  },
  media: {
    height: 203,
  },

}));

export default function Favorites() {
  const classes = useStyles();

  //Hooks
  const characterHook = useCharacterHok();
  const characters = characterHook.favorites.filter(x => x.name);

  return (  
    <div className={classes.root}>
      <div className={classes.container}>
      <TopBar enableSearch={false} enableFavorite={false}/>
      
      <Typography variant="h3" component="h3" className={classes.title}>
        favorites_
      </Typography>

      <div className={classes.cards}>
      {characters.map((character) => (
      <Card className={classes.card} key={character.id}>
            <CardMedia  
              className={classes.media}
              image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              title="Comic Image"
            />
          
          <CardContent className={classes.name}>
              <Typography gutterBottom variant="h6" component="h6" style={{marginLeft: -15}}>
                {character.name}
              </Typography>
            </CardContent>
        </Card>
      ))}

      {characters.length === 0  && (
        <Typography variant="h3" component="h3" className={classes.title}>
          There is no favorites characters.
        </Typography>
      )}
      </div>
    </div>
    </div>
  );
}
