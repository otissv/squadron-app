import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { mapStateToProps } from '../../reducers';

export default function(ComposedClass, redirect) {

  class Container extends React.Component{
    render () {
      return <ComposedClass {...this.props}/>;
    }
  }

  return connect(mapStateToProps, actions)(Container);
}
