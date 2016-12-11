import React from 'react';
import autobind from 'class-autobind';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../reducers';
import { reduxForm } from 'redux-form';
import actions from '../../actions';

import { USERS_ROUTE } from '../../constants/routes-constants';

export default function UserForm (Component, formName) {

  class ComposedClass extends React.Component {
    constructor () {
      super(...arguments);
      autobind(this);
    }


    componentWillMount () {
      const { initialize, user } = this.props;

      initialize && user && initialize(user);
    }


    handleEditSubmit (user) {
      const {
        redirectTo,
        selectedUser,
        storage,
        updateUser
      } = this.props;

      const { id, token } = storage;

      updateUser({ id, token, user }).payload
        .then(response => {
          redirectTo(`/users/${selectedUser}`);
        });
    }


    handleNewSubmit (user) {
      console.log('NewUser onSubmit');
      const {
        storage,
        redirectTo,
        createUser
      } = this.props;

      const { id, token } = storage;

      createUser({ id, token, user }).payload
        .then(response => {
          console.log(response);
          redirectTo(USERS_ROUTE);
        })
        .catch(error => {
          console.log(error);
        });
    }


    render () {
      return <Component
      {...this.props}
      handleEditSubmit={this.handleEditSubmit}
      handleNewSubmit={this.handleNewSubmit}
      />;
    }
  }


  function validate (values) {
    const errors = {};

    if (!values.email) {
      errors.email = 'Enter a email address';
    }

    if (!values.firstName) {
      errors.firstName = 'Enter a first name';
    }

    if (!values.lastName) {
      errors.lastName = 'Enter last name';
    }

    if (!values.roles) {
      errors.roles = 'Enter a role';
    }

    if (!values.username) {
      errors.username = 'Enter a username';
    }

    return errors;
  }

  const rdxForm = reduxForm(
    {
      form: formName,
      validate
    },
    actions
  )(ComposedClass);

  return connect(mapStateToProps, actions)(rdxForm);
}
