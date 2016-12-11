import React from 'react';
import Authuthoried from '../../auth/containers/authorised-container-auth';
import EditUser from '../components/Edit-user';
import UserContainer from '../containers/container-user';
import UserForm from '../containers/form-container-user';

const EditUserView = () => <UserContainer component={UserForm(EditUser, 'UserEditForm')} />;


export default Authuthoried(EditUserView);
