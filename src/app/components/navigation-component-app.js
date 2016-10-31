import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { mapStateToProps } from '../../reducers';

import {
  ROOT_ROUTE,
  SIGNIN_ROUTE,
  SIGNOUT_ROUTE,
  SIGNUP_ROUTE,
  USERS_ROUTE
} from '../../contants';


const LoggedInNav = (props) => (
  <ul className='uk-list'>
    <li><Link to={ROOT_ROUTE}>Home</Link></li>
    <li><Link to={USERS_ROUTE}>Users</Link></li>
    <li><Link to={SIGNOUT_ROUTE}>Signout</Link></li>
  </ul>
);

const NotLoggedInNav = (props) => (
  <ul className='uk-list'>
    <li><Link to={ROOT_ROUTE}>Home</Link></li>
    <li><Link to={SIGNIN_ROUTE}>Signin</Link></li>
    <li><Link to={SIGNUP_ROUTE}>Signup</Link></li>
  </ul>
);


class Navigation extends React.Component{
  render () {
    return this.props.isLoggedIn ? <LoggedInNav/> : <NotLoggedInNav/>;
  }
}


Navigation.propTypes = {
  isLoggedIn: React.PropTypes.bool
};

export default connect(mapStateToProps)(Navigation);
