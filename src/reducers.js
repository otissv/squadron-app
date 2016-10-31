import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user/reducer-user';
import appReducer from './app/reducer-app';

export function mapStateToProps (state) {
  return {
		isLoggedIn        : state.app.isLoggedIn,
    storage           : state.app.storage,

		user              : state.users.user,
		usersAll          : state.users.usersAll,
		selectedUser      : state.users.selectedUser
  };
}

const rootReducer = combineReducers({
  app   : appReducer,
  form  : formReducer,
  users : userReducer
});

export default rootReducer;
