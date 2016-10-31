export const MOCK = false;
export const API_URL = `http://localhost:8000/v01/graphql`;
export const AUTH_URL = `http://localhost:8000/v01/auth`;

// Public routes
export const ROOT_ROUTE = '/';


export const SIGNIN_ROUTE = '/signin';
export const SIGNOUT_ROUTE = '/signout';
export const SIGNUP_ROUTE = '/signup';

export const USERS_ROUTE = '/users';
export const USER_EDIT_ROUTE = '/user/edit';
export const USER_NEW_ROUTE = './user/new';


// Application action types
export const DELETE_STORAGE = 'DELETE_STORAGE';
export const GET_STORAGE = 'GET_STORAGE';
export const LOCATION = 'LOCATION';
export const LOGGEDIN = 'LOGGEDIN';
export const SET_STORAGE = 'SET_STORAGE';


// Storage actions types
export const AUTHENTICATE = 'AUTHENTICATE';
export const UNAUTHENTICATE = 'UNAUTHENTICATE';


// Authentication actions types
export const REGISTER = 'REGISTER';

// User action types
export const CREATE_USER = 'CREATE_USER';
export const GET_USERS = 'GET_USERS';
export const GET_USER = 'GET_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const REMOVE_USER_FROM_LIST = 'REMOVE_USER_FROM_LIST';
export const SET_USERS = 'SET_USERS';
export const SET_USER = 'SET_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const SELECT_USER = 'SELECTED_USER';
