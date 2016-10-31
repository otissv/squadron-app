import { query } from '../helpers/asyc-query.js';

import {
  AUTH_URL,
  AUTHENTICATE,
  REGISTER,
  UNAUTHENTICATE
} from '../contants';


export function authenticate (user) {

  const request = query({
    url   : AUTH_URL,
    action: 'authenticate',
    query : `query authenticate ($username: String, $password: String) {
      authenticate (username: $username, password: $password) {
        id
        roles
        token
        username
      }
    }`,
    variables: JSON.stringify(user)
  });

  return {
    type: AUTHENTICATE,
    payload: request.then(response => response)
  };
}


export function register (user) {
  const request = query({
    url   : AUTH_URL,
    query : `mutation register ($username: String, $password: String) {
      register (username: $username,password: $password) {
        id
        roles
        token
        username
      }
    }`,
    variables: JSON.stringify(user)
  });


  return {
    type: REGISTER,
    payload: request.then(response => response)
  };
}


export function unauthenticate (id) {
  const request = query({
    url   : AUTH_URL,
    query : `mutation unauthenticate (
      $id: String
    ) {
      register (
        id: "$id}",
      ) {
        token
      }
    }`,
    variables: {
      "id": `${id}`
    }
  }
);
  return {
    type: UNAUTHENTICATE,
    payload: request
  };
}
