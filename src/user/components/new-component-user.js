import React from 'react';
import UserForm from './form-component-user';
import { USERS_ROUTE } from '../../contants';
import autobind from 'class-autobind';


export default class NewUser extends React.Component  {
  constructor() {
    super(...arguments);
    autobind(this);
  }

  handleSubmit (user) {
    console.log('NewUser onSubmit');
    const {
      storage,
      redirectTo,
      createUser
    } = this.props;

    const { id, token } =  storage;

    createUser({ id, token, user }).payload
      .then(response => {
        console.log(response);
        redirectTo(USERS_ROUTE);
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange(e) {

  }


  render () {
    const { handleSubmit } = this.props;
    console.log();
    return <UserForm
      onSubmit={handleSubmit(this.handleSubmit)}
      {...this.props} user={{}}
      heading='New User'
    />;
  }
}


NewUser.propTypes = {
  redirectTo   : React.PropTypes.func.isRequired,
  storage      : React.PropTypes.object.isRequired,
  createUser  : React.PropTypes.func.isRequired,
  handleSubmit : React.PropTypes.func.isRequired
};
