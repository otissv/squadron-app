import { connect } from 'react-redux';
import { mapStateToProps } from '../../reducers';
import { reduxForm } from 'redux-form';
import actions from '../../actions';


export default function AuthForm (ComposedClass, formName) {
  function validate (values) {
    const errors = {};

    if (!values.username) {
      errors.username = 'Enter a username';
    }

    if (!values.password) {
      errors.password = 'Enter a password';
    }

    return errors;
  }

  const rdxForm = reduxForm(
    {
      form: formName,
      validate,
    },
    actions
  )(ComposedClass);

  return connect(mapStateToProps, actions)(rdxForm);
}
