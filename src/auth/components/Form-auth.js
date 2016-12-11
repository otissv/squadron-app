import React from 'react';
import { Field } from 'redux-form';
import Form from 'react-uikit-form';
import FormReduxInput from '../../shared/components/form-redux-input';
import Button from 'react-uikit-button';


const AuthForm = (props) => {
  const {
    heading,
    onSubmit
  } = props;

  return <Form
    title={heading}
    layout='stacked'
    onSubmit={onSubmit}
  >
    <Field
      name="username"                   // Specify field name
      component={FormReduxInput}           // Specify render component above
      label='Username'
      type="text"
      help={{type: 'block'}}
    />
    <Field
      name="password"                   // Specify field name
      component={FormReduxInput}           // Specify render component above
      label='Password'
      type="password"
      help={{type: 'block'}}
    />
    <Button type='submit' context='primary' margin='right top'>
      Submit
    </Button>
  </Form>;
};


AuthForm.propTypes = {
  heading				: React.PropTypes.string,
  handleSubmit  : React.PropTypes.func.isRequired,
  onSubmit      : React.PropTypes.func.isRequired
};

export default AuthForm;
