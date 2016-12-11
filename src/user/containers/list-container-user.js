import React from 'react';
import autobind from 'class-autobind';
import { connect } from 'react-redux';
import actions from '../../actions';
import { mapStateToProps } from '../../reducers';

class UsersContainer extends React.Component {
  constructor () {
    super(...arguments);
    autobind(this);
  }

  handleSetUser (e) {
    const memId = e.target.dataset.memid;

    this.props.selectUser(memId);
  }

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
    const Component = this.props.component;

    return <Component
      {...this.props}
      handleSetUser={this.handleSetUser}
    />;
  }
}


UsersContainer.propTypes = {
  getUsers: React.PropTypes.func.isRequired,
  setUsers: React.PropTypes.func.isRequired,
  storage : React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, actions)(UsersContainer);
