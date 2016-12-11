import React from 'react';
import { Link } from 'react-router';
import { Field, FieldArray } from 'redux-form';
import Form from 'react-uikit-form';
import FormReduxInput from '../../shared/components/form-redux-input';
import Button from 'react-uikit-button';
import { USERS_ROUTE } from '../../constants/routes-constants';


const renderMembers = (props) => {
  const { data, fields } = props;

  return <ul>
    {fields.map((member, index) => {
      return <li key={index}>
      <Field
        display='inline'
        name={member}
        component={FormReduxInput}
        label={data[index]}
        type='checkbox'
        help={{type: 'block'}}
      />
      </li>;
    })}
  </ul>;
};

const UserForm = (props) => {
  const {
    heading,
    // selectedUser,
    // onChange,
    onSubmit
  } = props;

  return <Form
    title={heading}
    layout='stacked'
    onSubmit={onSubmit}
  >

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

    <FieldArray
      name="roles"
      component={renderMembers}
      label='Roles'
      help={{type: 'block', context: 'danger'}}
      data={['Admin', 'user']}
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
};


// Vaidate proptypes
UserForm.propTypes = {
  user         : React.PropTypes.object.isRequired,
  heading       : React.PropTypes.string,
  // initializeForm: React.PropTypes.func.isRequired,
  // selectedUser : React.PropTypes.string,
  // onChange      : React.PropTypes.func.isRequired,
  onSubmit      : React.PropTypes.func.isRequired
};

export default UserForm;
