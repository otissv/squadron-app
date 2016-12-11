import React from 'react';
import autobind from 'class-autobind';
import { connect } from 'react-redux';
import actions from '../../actions';
import { mapStateToProps } from '../../reducers';
import DeleteUser from '../components/Delete-user';

class UserContainer extends React.Component {
  constructor () {
    super(...arguments);
    autobind(this);
  }


  componentWillMount () {
    const {
      getUser,
      selectedUser,
      setUser,
      storage } = this.props;

    const { id, token } = storage;

    getUser({ id, token, user: selectedUser }).payload
      .then(response => {
        console.log(response);
        setUser(response.data);
      });
  }


  handleDelete (e) {
    DeleteUser(this.props);
  }


  render () {
    const Component = this.props.component;

    return <Component
      {...this.props}
      handleDelete={this.handleDelete}
    />;
  }
}

UserContainer.propTypes = {
  getUser     : React.PropTypes.func.isRequired,
  selectedUser: React.PropTypes.string.isRequired,
  setUser     : React.PropTypes.func.isRequired,
  storage     : React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, actions)(UserContainer);
