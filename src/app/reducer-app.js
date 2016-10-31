import {
  LOGGEDIN,
  DELETE_STORAGE,
  GET_STORAGE,
  SET_STORAGE
} from '../contants';


const INITAL_STATE = {
  isLoggedIn: false,
  storage : null
};

export default function appReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case DELETE_STORAGE:
      return {...state, storage: action.payload};

    case GET_STORAGE:
      return {...state, storage: action.payload};

    case LOGGEDIN:
      return {...state, isLoggedIn: action.payload};

    case SET_STORAGE:
      return {...state, storage: action.payload};

    default:
      return state;
  }
}
