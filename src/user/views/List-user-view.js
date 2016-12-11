import React from 'react';
import Authuthoried from '../../auth/containers/authorised-container-auth';
import ListStaffUsers from '../components/List-user';
import UsersContainer from '../containers/list-container-user';

const UserListStaffView = () => <UsersContainer component={ListStaffUsers} />;

export default Authuthoried(UserListStaffView);
