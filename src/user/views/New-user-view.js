import React from 'react';
import Authuthoried from '../../auth/containers/authorised-container-auth';
import NewUser from '../components/New-user';
import UserForm from '../containers/form-container-user';


export default Authuthoried(UserForm(NewUser, 'UserNewForm'));
