import { connect } from 'react-redux';
import { mapStateToProps } from '../../reducers';
import { reduxForm } from 'redux-form';
import actions from '../../actions';


export default function UserForm (ComposedClass, formName) {
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
      validate,
    },
    actions
  )(ComposedClass);

  return connect(mapStateToProps, actions)(rdxForm);
}
