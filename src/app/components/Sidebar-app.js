import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { mapStateToProps } from '../../reducers';
import Nav from 'react-uikit-nav';
import NavItem from 'react-uikit-nav/lib/nav-item'

import {
  ROLES_ROUTE,
  USERS_ROUTE
} from '../../constants/routes-constants';


class Sidebar extends React.Component {
  render () {
    return <Nav type='side'>
      <NavItem type='header' body='Admin'/>
      <li><Link to={ROLES_ROUTE}>Roles</Link></li>
      <li><Link to={USERS_ROUTE}>Users</Link></li>

    </Nav>;
  }
}


Sidebar.propTypes = {
  isLoggedIn: React.PropTypes.bool
};

export default connect(mapStateToProps)(Sidebar);
