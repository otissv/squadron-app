import {
  REMOVE_USER_FROM_LIST,
  SELECT_USER,
  SET_USERS,
  SET_USER,
  UPDATE_USER
} from '../constants/actions-constants';

const INITAL_STATE = {
  selectedUser: null,
  usersAll: {},
  user: {}
};

export default function applicationReducer (state = INITAL_STATE, action) {
  switch (action.type) {
    case REMOVE_USER_FROM_LIST:
      return {...state, usersAll: action.payload};

    case SET_USERS:
      return {...state, usersAll: action.payload};

    case SELECT_USER:
      return {...state, selectedUser: action.payload};

    case SET_USER:
      return {...state, user: action.payload};

    case UPDATE_USER:
      return {...state, user: action.payload};

    default:
      return state;
  }
}
