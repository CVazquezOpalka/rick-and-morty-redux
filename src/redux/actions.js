export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_CHARACTER = "GET_CHARACTER";

export const getCharacters = () => {
  return function (dispatch) {
    return fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: GET_CHARACTERS,
          payload: json
        })
      );
  };
};

export const getCharacter = (id) => {
  return function (dispatch) {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: GET_CHARACTER,
          payload: json,
        })
      );
  };
};
