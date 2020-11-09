import React, { useState, createContext, useMemo, useCallback, useEffect } from "react";
import repository from "../../data/repository";


export const ComicContext = createContext();

export default function ComicProvider(props) {
  const data = useMemo(() => repository(), []);
  // const initialComics = () => data.getItemParse('comics');
  // const initialCharacter = () => data.getItemParse('character');
  // const initialFavorites = () => data.getItemParse('favorites');

  const [comics, setComics] = useState({});
  const [character, setCharacter] = useState({});
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (data.getItemParse('favorites') === null || data.getItemParse('favorites') === undefined) {
      data.setItemStringify('favorites', []);
    }
  }, []);

  const updateComics = (comics) => {
    setComics(comics);
    data.setItemStringify('comics', comics);
  };

  const updateCharacter = (character) => {
    setCharacter(character);
    data.setItemStringify('character', character);
  };

  const updateCharacterFavorite = async (character) => {
    let storageFavorites = data.getItemParse('favorites');

    // Return if the user tries to insert the same character id
    if (storageFavorites.filter(item => item.id === character.id).length > 0) {
      return;
    }
    
    storageFavorites.push(character);
    setFavorites(storageFavorites);
    data.setItemStringify('favorites', storageFavorites);
  }

  const getCharacterFavorites = () => {
    return data.getItemParse('favorites');
  }

  const removeCharacterFavorite = async (character) => {
    data.removeItem('favorites', character);
  }

  const clearStorage = () => {
    data.clear();
    setComics({});
    setCharacter({});
  };

  return (
    <ComicContext.Provider
      value={{
        comics,
        updateComics,
        updateCharacter,
        updateCharacterFavorite,
        removeCharacterFavorite,
        getCharacterFavorites,
        clearStorage
      }}
    >
      {props.children}
    </ComicContext.Provider>
  );
}
