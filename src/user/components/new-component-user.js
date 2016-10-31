import React from 'react';
import UserForm from './form-component-user';
import { USERS_ROUTE } from '../../contants';


export default class NewUser extends React.Component  {
  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  onSubmit (data) {
    const {
      storage,
      redirectTo,
      createUser
    } = this.props;

    const { id, token } =  storage;

    createUser({ id, token, data }).payload
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
    return <UserForm
      onSubmit={handleSubmit(this.onSubmit.bind(this))}
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
