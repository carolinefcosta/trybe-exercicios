import { WAITING_API, RESPONSE_API, ERROR_API } from "../actions";

const INITIAL_STATE = {
  name: '',
  isLoading: false,
  error: '',
}

const gameOfThunksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WAITING_API:
      return {
        ...state,
        isLoading: true,
      }

      case RESPONSE_API:
      return {
        ...state,
        isLoading: false,
        ...action.payload[0],
      }

      // case ERROR_API:
      // return {
      //   ...state,
      //   isLoading: false,
      //   ...action.payload,
      // }
  
    default:
      return state;
  }
};

export default gameOfThunksReducer;