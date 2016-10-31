import { USERS_ROUTE } from '../../contants';


export default function deleteUser(props) {
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
      if(!response.data.success) {
        console.log(response);
      }

      removeUserFromList(usersAll, selectedUser);
      setUser({});
      selectUser(null);
      redirectTo(USERS_ROUTE);
    });
}
