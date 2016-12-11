import React from 'react';
import {
  USERS_ROUTE,
  USER_EDIT_ROUTE
} from '../../constants/routes-constants';
import { Link } from 'react-router';


const ShowUser = (props) => {
  const { user, selectedUser, handleDelete } = props;

  return <div>
    <h1>User Profile</h1>
    First Name: {user.firstName}<br />
    Last Name: {user.lastName}<br />
    Username: {user.username}<br />
    Email: {user.email}<br />
    Roles: {user.roles}<br />

    {/* Adddres1: {user.address ? user.address.address1 : ''} <br />
    Adddres2: {user.address ? user.address.address2: ''}<br />
    City: {user.address ? user.address.city : ''}<br />
    State: {user.address ? user.address.state : ''}<br />
    Postcode: {user.address ? user.address.postCode : ''}<br /> */}

    Comments: <br />


    <Link to={USERS_ROUTE} >Back</Link>
    <Link to={`${USER_EDIT_ROUTE}/${selectedUser}`} >Edit</Link>
    <a href='#' onClick={handleDelete}>Detele</a>
  </div>;
};


ShowUser.propTypes = {
  user        : React.PropTypes.object.isRequired,
  selectedUser: React.PropTypes.string.isRequired
};


export default ShowUser;
