import React from 'react';
import UserForm from './Form-user';


const NewUser = (props) => {
  const { handleSubmit, handleNewSubmit } = props;

  return <UserForm
    {...props}
    user={{}}
    onSubmit={handleSubmit(handleNewSubmit)}
    heading='New User'
  />;
};


NewUser.propTypes = {
  redirectTo   : React.PropTypes.func.isRequired,
  storage      : React.PropTypes.object.isRequired,
  createUser  : React.PropTypes.func.isRequired,
  handleSubmit : React.PropTypes.func.isRequired
};


export default NewUser;
