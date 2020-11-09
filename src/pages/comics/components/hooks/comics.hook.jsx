import { useState, useContext, useEffect, useCallback } from "react";
import { ComicContext } from "../../../../components/contexts/comic.provider";

export default function useComicsHook(items) {
  const mainContext = useContext(ComicContext);

  const [comics, setComics] = useState(items);

  const updateComics = async (comics) => {
    setComics(comics);
    mainContext.updateComics(comics);
  };
  
  return {
    comics: comics,
    updateComics: updateComics,
  };
}
