import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';

import Layout from './app/components/layout-component-app';
import Home from './app/components/home-component-app';



import AuthForm from './auth/containers/form-container-auth';
import Authuthoried from './auth/containers/authorised-container-auth';
import Signup from './auth/components/signup-component-auth';
import Signin from './auth/components/signin-component-auth';
import Signout from './auth/components/signout-component-auth';

import UsersListContainer from './user/containers/list-container-user';
import UserContainer from './user/containers/container-user';
import UserForm from './user/containers/form-container-user';
import UserEdit from './user/components/edit-component-user';
import UserNew from './user/components/new-component-user';


import Container from './shared/containers/container-shared';

import {
  SIGNIN_ROUTE,
  SIGNOUT_ROUTE,
  SIGNUP_ROUTE,
  USERS_ROUTE,
  USER_EDIT_ROUTE,
  USER_NEW_ROUTE
} from './contants';

const LayoutRoute = Container(Layout);
const HomeRoute = Container(Home);

const SignupRoute = AuthForm(Signup, 'SignupForm');
const SignoutRoute = Container(Signout);
const SigninRoute = AuthForm(Signin, 'SigninForm');

const UserEditRoute = UserForm(UserEdit, 'UserEditForm');
const UserNewRoute = UserForm(UserNew, 'UserNewForm');
const UsersListRoute = Authuthoried(UsersListContainer);
const UserRoute = Authuthoried(UserContainer);


export default (
  <Router path='/' component={LayoutRoute}>
    <IndexRoute component={HomeRoute} />
    <Route path={SIGNUP_ROUTE} component={SignupRoute} />
    <Route path={SIGNOUT_ROUTE} component={SignoutRoute} />
    <Route path={SIGNIN_ROUTE} component={SigninRoute} />

    <Route path={USERS_ROUTE} component={UsersListRoute} />
    <Route path={`${USERS_ROUTE}/:userId`} component={UserRoute}/>
    <Route path={`${USER_EDIT_ROUTE}/:userId`} component={UserEditRoute}/>
    <Route path={`${USER_NEW_ROUTE}`} component={UserNewRoute}/>
  </Router>
);
