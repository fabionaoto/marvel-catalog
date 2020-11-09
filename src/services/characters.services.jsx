import { api } from "../services/api.services";

export default function CharactersServices() {
  const getCharacters = async (nameStartsWith, pageNumber, pageSize) => {
    try {
      let response = await api.get('characters', {
        params: {
          offset: pageNumber,
          limit: pageSize,
          nameStartsWith: nameStartsWith
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

  const getCharacter = async (id) => {
    try {
      let response = await api.get(`characters/${id}`);
      if (response.data === null) {
        throw new Error(response);
      }
      return response.data.data;  
    } catch (ex) {
      return ex;
    } 
  }

  return {
    getCharacters: getCharacters,
    getCharacter: getCharacter
  };
}
