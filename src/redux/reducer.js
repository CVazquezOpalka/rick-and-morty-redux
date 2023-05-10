import { GET_CHARACTER, GET_CHARACTERS } from "./actions";

const initialState = {
  allCharacters: [],
  character: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        allCharacters: action.payload.results
      };
    case GET_CHARACTER:
      return {
        ...state,
        character: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
