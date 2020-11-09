import { api } from "../services/api.services";

export default function ComicsServices() {

  const getComics = async (charactersId, pageNumber = 1, pageSize = 100) => {
    try {
      let response = await api.get('comics', {
        params: {
          offset: pageNumber,
          limit: pageSize,
          characters: charactersId
        },
      });
      if (response.data === null) {
        throw new Error(response);
      }
      return response.data.data;  
    } catch (ex) {
      return ex;
    } 
  };

  return {
    getComics: getComics,
  };
}
