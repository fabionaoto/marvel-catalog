import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import MarvelAutoComplete from "./../../pages/comics/components/autoComplete/marvel.autoComplete";
import Link from '@material-ui/core/Link';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    width: '1440px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '15px',
    marginBottom: '15px',
    '& > *': {
      marginRight: 50
    }
  },

}));

export default function TopBar({
  handleChangeCharacter, 
  enableSearch = true,
  enableFavorite = true
  }) {
  const classes = useStyles();
  let history = useHistory();

  return (  
    <div className={classes.container}>
      <Link
            component="button"
            variant="body2"
            onClick={() => {
              history.push('/comics');
            }}
          >
            <Typography gutterBottom variant="h3" component="h3" className={classes.title}>
          comics_
        </Typography>
          </Link>
        
        {enableSearch && <MarvelAutoComplete getOption={handleChangeCharacter} className={classes.autoComplete}/>}

        
          {enableFavorite && <Link
            component="button"
            variant="body2"
            onClick={() => {
              history.push('/favorites');
            }}
          >
            <Typography gutterBottom variant="h3" component="h3" className={classes.favorites}>
              favorites_
            </Typography>
          </Link>
          }
        
      </div>
  );
}
