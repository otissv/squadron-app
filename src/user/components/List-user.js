import React from 'react';
import { objectToArray } from '../../helpers';
import Table from 'react-uikit-table';
import TableAction from '.././../shared/components/Table-action-shared';
import Paper from '../../shared/components/Paper-shared';
import PageHeader from '../../shared/components/Page-header-shared';
import titleize from '../../helpers/titleize';
import {
  USERS_ROUTE,
  USER_EDIT_ROUTE,
  USER_NEW_ROUTE
} from '../../constants/routes-constants';


const ListUsers = (props) => {
  const { usersAll, handleSetUser } = props;

  const items = objectToArray(usersAll).map(item => {
    return <tr key={item.id}>
      <td>{item.username}</td>
      <td>{titleize(item.firstName)} {titleize(item.lastName)}</td>
      <td>{item.email}</td>
      <td>{item.online}</td>
      <td>{item.telephone}</td>

      <TableAction
        onClick={handleSetUser}
        item={item}
        view={USERS_ROUTE}
        edit={USER_EDIT_ROUTE}
      />
    </tr>;
  });


  return <div>
    <PageHeader
      title='Users'
      items={[{
        body: 'New User',
        href: USER_NEW_ROUTE
      }]}
    />

    <Paper depth='1'>
      <Table
        className='App-table'
        caption='Users Table'
        striped
        hover
        head={[
          'Usernmae',
          'Name',
          'Email',
          'Online',
          'Telephone',
          'Actions'
        ]}
      >
        <tbody>{items}</tbody>
      </Table>
    </Paper>
  </div>;
};


ListUsers.propTypes = {
  usersAll  : React.PropTypes.object.isRequired,
  selectUser: React.PropTypes.func.isRequired
};

export default ListUsers;
