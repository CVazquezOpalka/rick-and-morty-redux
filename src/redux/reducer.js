import { GET_CHARACTER, GET_CHARACTERS, GET_PAGE } from "./actions";

const initialState = {
  allCharacters: [],
  actualPage: "https://rickandmortyapi.com/api/character",
  onNextPage: "",
  onPreviousPage: "",
  isLoading: true,
  login: false,
  page: 1,
  character: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        allCharacters: action.payload,
        isLoading: false,
      };
    case GET_CHARACTER:
      return {
        ...state,
        character: action.payload.result,
        isLoading: false,
      };
    case GET_PAGE:
      return {
        ...state,
        onNextPage: action.payload.info.next,
        onPreviousPage: action.payload.info.prev,
      };
    default:
      return state;
  }
};

export default rootReducer;
