import { useState, useContext, useEffect, useCallback } from "react";
import { ComicContext } from "../../../../components/contexts/comic.provider";

export default function useCharacterHok(item) {
  const mainContext = useContext(ComicContext);

  const [character, setCharacter] = useState(item);
  const [favorites, setFavorites] = useState(mainContext.getCharacterFavorites());

  const updateCharacter = async (character) => {
    setCharacter(character);
    mainContext.updateCharacter(character);
  };

  const updateCharacterFavorite = async (character) => {
    mainContext.updateCharacterFavorite(character);
    setFavorites(mainContext.getCharacterFavorites());
  }

  const removeCharacterFavorite = async (character) => {
    mainContext.removeCharacterFavorite(character);
  }
  
  return {
    character: character,
    favorites: favorites,
    updateCharacter: updateCharacter,
    updateCharacterFavorite: updateCharacterFavorite,
    removeCharacterFavorite: removeCharacterFavorite
  };
}
