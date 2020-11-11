import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import useComicsHook from './components/hooks/comics.hook';
import ComicsCard from "./components/comic/comic.card";
import ComicsServices from "./../../services/comics.services";
import TablePagination from '@material-ui/core/TablePagination';

import CharactersServices from "../../services/characters.services";
import CharacterDetail from "./components/character/character.detail";
import useCharacterHok from "./components/hooks/character.hook";
import {ComicContext} from '../../components/contexts/comic.provider';
import { useHistory } from "react-router-dom";
import TopBar from "../../components/topbar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%'
  },
  container: {
    width: '1440px'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '15px',
    marginBottom: '15px',
  },
  title: {
    marginRight: 20
  },
  autoComplete: {
    
  },
  favorites: {
    float: 'right'
  },
  tablePagination: {
    marginTop: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caption: {
    fontSize: "0.875rem"
  },
  toolbar: {
    "& > p:nth-of-type(2)": {
      fontSize: "0.875rem",
    }
  }
}));

export default function Comics() {
  const mainContext = useContext(ComicContext);
  const classes = useStyles();
  const [character, setCharacter] = useState({id: 1009610, name: ''})
  const [comics, setComics] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalComics, setTotalComics] = useState(0);

  //Hooks
  const comicsHook = useComicsHook();
  const characterHook = useCharacterHok(character);

  //Services
  const comicsServices = ComicsServices();
  const characterServices = CharactersServices();  

  useEffect(() => {
    const getComics = async () => {
      const data = await comicsServices.getComics(character.id, page, rowsPerPage);
        setTotalComics(data.total);
        if (data.results.length > 0) {
          setComics(data.results);
          comicsHook.updateComics(data.results);
        }
    }

    const getCharacter = async () => {
      const data = await characterServices.getCharacter(character.id);
      
        setCharacter(data.results[0]);
        characterHook.updateCharacter(data.results[0]);
    }

    if (character.id > 0) {
      getComics();
      getCharacter();
      //mainContext.clearStorage();
    }

  }, [character.id, page]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeCharacter = (character) => {
    setCharacter(character);
  }

  return (  
    <div className={classes.root}>
      <div className={classes.container}>
      
      {/* Header */}
      <TopBar handleChangeCharacter={handleChangeCharacter} />

      {/* Personagem */}
      {character.thumbnail && 
      (
        <CharacterDetail character={character} />
      )}

      {/* Quadrinhos */}
      {comics.length > 0 && (
        <ComicsCard items={comics}/>
      )}
      
      {/* Paginação */}
      {character.id > 0 && comics.length > 0 &&
      <TablePagination
        classes={{
          root: classes.tablePagination,
          toolbar: classes.toolbar,
          caption: classes.caption
        }}
        component="div"
        count={totalComics}
        page={page}
        onChangePage={handleChangePage}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    }
    </div>
    </div>
  );
}
