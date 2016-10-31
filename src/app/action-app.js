import { browserHistory } from 'react-router';
import cookie_js from 'cookie_js';

const cookie = cookie_js.cookie;

import {
  GET_STORAGE,
  LOGGEDIN,
  DELETE_STORAGE,
  LOCATION,
  SET_STORAGE
} from '../contants';


export function redirectTo (path) {
  browserHistory.push(path);

  return {
    type: LOCATION,
    payload: path
  };
}

export function deleteStorage () {
  cookie.empty();

  return {
    type: DELETE_STORAGE,
    payload: null
  };
}


export function getStorage () {
  return {
    type: GET_STORAGE,
    payload: cookie.all()
  };
}


export function loggedIn (bool) {
  return {
    type: LOGGEDIN,
    payload: bool
  };
}


export function setStorage (storage) {
  cookie.set(storage);

  return {
    type: SET_STORAGE,
    payload: storage
  };
}
