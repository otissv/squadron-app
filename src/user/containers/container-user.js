import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { mapStateToProps } from '../../reducers';
import Users from '../components/view-component-user';


class UserContainer extends React.Component{
  componentWillMount () {
    const {
      getUser,
      selectedUser,
      setUser,
      storage } = this.props;

    const { id, token } = storage;

    getUser({ id, token, user: selectedUser }).payload
      .then(response => {
        setUser(response.data);
      });
  }

  render () {
    return <Users {...this.props}/>;
  }
}

UserContainer.propTypes = {
  getUser     : React.PropTypes.func.isRequired,
  selectedUser: React.PropTypes.string.isRequired,
  setUser     : React.PropTypes.func.isRequired,
  storage     : React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, actions)(UserContainer);
