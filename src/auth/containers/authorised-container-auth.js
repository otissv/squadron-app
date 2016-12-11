import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { mapStateToProps } from '../../reducers';

export default function (ComposedClass, redirect) {

  class Authuthoried extends React.Component {
    constructor (props) {
      super(props);
      this.ComponentClass = props.isLoggedIn ? <ComposedClass {...this.props}/> : <div/>;
    }

    componentWillMount () {
      const { isLoggedIn, redirectTo } = this.props;

      if(!isLoggedIn) {
        const path = redirect || '/';
        redirectTo(path);
      }
    }

    render () {
      return this.ComponentClass;
    }
  }

  Authuthoried.propTypes = {
    isLoggedIn: React.PropTypes.bool,
    redirectTo: React.PropTypes.func.isRequired
  };

  return connect(mapStateToProps, actions)(Authuthoried);
}
