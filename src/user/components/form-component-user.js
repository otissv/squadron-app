import React from 'react';
import { Link } from 'react-router';
import { Field } from 'redux-form';
import Form from 'react-uikit-form';
import FormReduxInput from '../../shared/components/form-redux-input';
import Button from 'react-uikit-button';
import { USERS_ROUTE } from '../../contants';


export default class UserForm extends React.Component {
  componentWillMount() {
    const { initialize, user } = this.props;
    initialize && user && initialize(user);
  }


  render () {
    const {
      heading,
      // selectedUser,
      // onChange,
      onSubmit
    } = this.props;

    return <Form
      title={heading}
      layout='stacked'
      onSubmit={onSubmit}
    >
      <h3>{heading}</h3>

      <Field
        name="username"
        component={FormReduxInput}
        label='Username'
        type='text'
        help={{type: 'block'}}
      />

      <Field
        name="email"
        component={FormReduxInput}
        label='Email'
        type='email'
        help={{type: 'block'}}
      />

      <Field
        name="firstName"
        component={FormReduxInput}
        label='First Name'
        type='text'
        help={{type: 'block'}}
      />

      <Field
        name="lastName"
        component={FormReduxInput}
        label='Last Name'
        type='text'
        help={{type: 'block'}}
      />

      <Field
        name="dateOfBirth"
        component={FormReduxInput}
        label='Date of Birth'
        icon='calendar'
        type='date'
        help={{type: 'block', context: 'danger'}}
      />

      <Button type='submit' context='primary' margin='right top'>
        Send
      </Button>

      <Link to={`${USERS_ROUTE}`} className='btn btn-danger'>
        <Button margin='top'>
          Cancel
        </Button>
      </Link>
    </Form>;
  }
}


// Vaidate proptypes
UserForm.propTypes = {
  user         : React.PropTypes.object.isRequired,
  heading       : React.PropTypes.string,
  // initializeForm: React.PropTypes.func.isRequired,
  // selectedUser : React.PropTypes.string,
  // onChange      : React.PropTypes.func.isRequired,
  onSubmit      : React.PropTypes.func.isRequired
};
