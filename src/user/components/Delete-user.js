import { USERS_ROUTE } from '../../constants/routes-constants';


export default function DeleteUser (props) {
  const {
    removeUserFromList,
    removeUser,
    redirectTo,
    selectUser,
    selectedUser,
    setUser,
    storage,
    usersAll
  } = props;

  const { id, token } = storage;

  removeUser({ id, token, selectedUser }).payload
    .then(response => {
      if (!response.data.success) {
        console.log(response);
      }

      removeUserFromList(usersAll, selectedUser);
      setUser({});
      selectUser(null);
      redirectTo(USERS_ROUTE);
    });
}
