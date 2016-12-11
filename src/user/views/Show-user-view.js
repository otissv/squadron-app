import React from 'react';
import ShowUser from '../components/Show-user';
import UserContainer from '../containers/container-user';
import Authuthoried from '../../auth/containers/authorised-container-auth';


const ShowUserView = () => <UserContainer component={ShowUser} />;

export default Authuthoried(ShowUserView);
