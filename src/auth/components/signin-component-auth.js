import React from 'react';
import AuthForm from './form-component-auth';
import autobind from 'class-autobind';

export default class Signin extends React.Component  {
  constructor() {
    super(...arguments);
    autobind(this);
  }

  handleSubmit (user) {
    const { authenticate, setStorage, loggedIn } = this.props;

    authenticate(user).payload
      .then(response => {
        if (response.errors) return Promise.reject(response.errors);

        this.props.redirectTo('/');
        setStorage(response.data);
        loggedIn(true);
      })
      .catch(errors=> {
        this.props.redirectTo('/signup');
        console.log(errors);
      })
  }


  render () {
    const { handleSubmit } = this.props;

    return <AuthForm
      onSubmit={handleSubmit(this.handleSubmit)}
      {...this.props}
      heading='Sing in'
      />;
  }
}


Signin.propTypes ={
  authenticate  : React.PropTypes.func,
  setStorage    : React.PropTypes.func,
  loggedIn      : React.PropTypes.func,
  redirectTo    : React.PropTypes.func,
  handleSubmit  : React.PropTypes.func
};
