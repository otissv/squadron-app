import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';

import Layout from './app/components/Layout-app';
import Home from './app/components/Home-app';


// Auth views
import AuthForm from './auth/containers/form-container-auth';
import Signup from './auth/components/Signup-auth';
import Signin from './auth/components/Signin-auth';
import Signout from './auth/components/Signout-auth';


// User views
import ListUsers from './user/views/List-user-view';
import ShowUser from './user/views/Show-user-view';
import EditUser from './user/views/Edit-user-view';
import NewUser from './user/views/New-user-view';


import Container from './shared/containers/container-shared';

import {
  SIGNIN_ROUTE,
  SIGNOUT_ROUTE,
  SIGNUP_ROUTE,
  ROLES_ROUTE,
  ROLE_EDIT_ROUTE,
  ROLE_NEW_ROUTE,
  USERS_ROUTE,
  USER_EDIT_ROUTE,
  USER_NEW_ROUTE
} from './constants/routes-constants.js';

const LayoutRoute = Container(Layout);
const HomeRoute = Container(Home);

const SignupRoute = AuthForm(Signup, 'SignupForm');
const SignoutRoute = Container(Signout);
const SigninRoute = AuthForm(Signin, 'SigninForm');


export default (
  <Router path='/' component={LayoutRoute}>
    <IndexRoute component={HomeRoute} />
    <Route path={SIGNUP_ROUTE} component={SignupRoute} />
    <Route path={SIGNOUT_ROUTE} component={SignoutRoute} />
    <Route path={SIGNIN_ROUTE} component={SigninRoute} />

    <Route path={ROLES_ROUTE} component={HomeRoute} />
    <Route path={`${ROLES_ROUTE}/:roleId`} component={HomeRoute}/>
    <Route path={`${ROLE_EDIT_ROUTE}/:roleId`} component={HomeRoute}/>
    <Route path={`${ROLE_NEW_ROUTE}`} component={HomeRoute}/>

    <Route path={USERS_ROUTE} component={ListUsers} />
    <Route path={`${USERS_ROUTE}/:userId`} component={ShowUser}/>
    <Route path={`${USER_EDIT_ROUTE}/:userId`} component={EditUser}/>
    <Route path={`${USER_NEW_ROUTE}`} component={NewUser}/>
  </Router>
);
