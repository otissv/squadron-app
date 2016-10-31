import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { mapStateToProps } from '../../reducers';
import Users from '../components/list-component-user';


class UsersContainer extends React.Component{
  componentWillMount () {
    const {
      getUsers,
      setUsers,
      storage } = this.props;

    const { id, token } = storage;
    
    getUsers({ id, token }).payload
      .then(response => {
        setUsers(response.data);
      });
  }

  render () {
    return <Users {...this.props} />;
  }
}


UsersContainer.propTypes = {
  getUsers: React.PropTypes.func.isRequired,
  setUsers: React.PropTypes.func.isRequired,
  storage : React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, actions)(UsersContainer);
