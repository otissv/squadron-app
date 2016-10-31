import axios from 'axios';
import { query, mutation } from '../helpers/asyc-query.js';

import {
  arrayToObject,
  deleteKeyToArray,
} from '../helpers';

import {
  API_URL,
  REMOVE_USER,
  REMOVE_USER_FROM_LIST,
  GET_USER,
  GET_USERS,
  SELECT_USER,
  SET_USER,
  SET_USERS,
  UPDATE_USER
} from '../contants';


export function createUser ({ id, token, data }) {
  const request = query({
    url   : API_URL,
    auth : { id, token },
    query:`mutation userCreate (
      $id       : String,
      $email    : String,
      $firstName: String,
      $lastName : String,
      $username : String
    ) {
      userCreate (
        id       : $id,
        email    : $email,
        firstName: $firstName,
        lastName : $lastName,
        username : $username
      )  {
        id
        created
        dateOfBirth
        email
        firstName
        lastLogin
        lastName
        telephone
        updated
        username
      }
    }`,
    variables: JSON.stringify(data)
  });

  return {
    type: UPDATE_USER,
    payload: request.then(response => response)
  };
}

export function removeUser ({ id, token, user }) {
  const request = axios.delete(`${API_URL}users/${user}/${query(id, token)}`);

  return {
    type: REMOVE_USER,
    payload: request
  };
}


export function getUsers ({ id, token }) {
  const request = query({
    url  : API_URL,
    auth : { id, token },
    query:`query userFindAll {
      userFindAll  {
        id
        created
        dateOfBirth
        email
        firstName
        lastLogin
        lastName
        telephone
        updated
        username
      }
    }`
  });

  return {
    type: GET_USERS,
    payload: request.then(response => response)
  };
}

export function setUsers (users) {
  const usersList = arrayToObject(users);

  return {
    type: SET_USERS,
    payload: usersList('id', 'user_')
  };
}


export function getUser ({ id, token, user }) {
  const request = query({
    url   : API_URL,
    auth : { id, token },
    query:`query userFindById ($id: String) {
      userFindById (id: $id)  {
        id
        created
        dateOfBirth
        email
        firstName
        lastLogin
        lastName
        telephone
        updated
        username
      }
    }`,
    variables: `{
      "id": "${user}"
    }`
  });

  return {
    type: GET_USER,
    payload: request.then(response => response)
  };
}


export function removeUserFromList ({ list, keyName }) {
  const userList = arrayToObject(deleteKeyToArray(list, keyName));

  return {
    type: REMOVE_USER_FROM_LIST,
    payload: userList('id', 'user_')
  };
}


export function selectUser (userId) {
  return {
    type: SELECT_USER,
    payload: userId
  };
}


export function setUser (user) {
  return {
    type: SET_USER,
    payload: user
  };
}


export function updateUser ({ id, token, user, data }) {
  const request = query({
    url   : API_URL,
    auth : { id, token },
    query:`mutation updateUser (
      $id       : String,
      $email    : String,
      $firstName: String,
      $lastName : String,
      $username : String
    ) {
      updateUser (
        id       : $id,
        email    : $email,
        firstName: $firstName,
        lastName : $lastName,
        username : $username
      )  {
        id
        created
        dateOfBirth
        email
        firstName
        lastLogin
        lastName
        telephone
        updated
        username
      }
    }`,
    variables: JSON.stringify(data)
  });

  return {
    type: UPDATE_USER,
    payload: request.then(response => response)
  };
}
