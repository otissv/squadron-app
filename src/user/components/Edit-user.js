import React from 'react';
import UserForm from './Form-user';

const EditUser = (props) => {
  const { handleSubmit, handleEditSubmit } = props;
  return <UserForm
    {...props}
    onSubmit={handleSubmit(handleEditSubmit)}
    heading='Edit User'
    />;
};


// Vaidate proptypes
EditUser.propTypes = {
  handleSubmit  : React.PropTypes.func.isRequired,
  redirectTo  : React.PropTypes.func.isRequired,
  selectedUser: React.PropTypes.string.isRequired,
  storage     : React.PropTypes.object.isRequired,
  updateUser  : React.PropTypes.func.isRequired
};


export default EditUser;
