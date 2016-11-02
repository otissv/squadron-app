import React from 'react';
import UserForm from './form-component-user';
import autobind from 'class-autobind';

export default class EditUser extends React.Component  {
  constructor() {
    super(...arguments);
    autobind(this);
  }


  handleSubmit (user) {
    const {
      redirectTo,
      selectedUser,
      storage,
      updateUser
    } = this.props;

    const { id, token } =  storage;
console.log(user);
    updateUser({ id, token, user }).payload
      .then(response => {
        redirectTo(`/users/${selectedUser}`);
      });
  }

  handleChange(e) {

  }


  render () {
    const { handleSubmit } = this.props;
    return <UserForm
      onSubmit={handleSubmit(this.handleSubmit)}
      {...this.props}
      heading='Edit User'
      onChange={this.handleChange}
      />;
  }
}

// Vaidate proptypes
EditUser.propTypes = {
  handleSubmit  : React.PropTypes.func.isRequired,
  redirectTo  : React.PropTypes.func.isRequired,
  selectedUser: React.PropTypes.string.isRequired,
  storage     : React.PropTypes.object.isRequired,
  updateUser  : React.PropTypes.func.isRequired
};
