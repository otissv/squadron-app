import React from 'react';

export default class Authuthoried extends React.Component {
  componentWillMount () {
    const { isLoggedIn, redirectTo, path } = this.props;

    if (!isLoggedIn) {
      const loadtion = path || '/';

      redirectTo(loadtion);
    }
  }

  render () {
    const ComposedClass = this.props.component;

    return <ComposedClass {...this.props}/>;
  }
}

Authuthoried.propTypes = {
  isLoggedIn: React.PropTypes.bool.isRequired,
  redirectTo: React.PropTypes.func.isRequired,
  component : React.PropTypes.element.isRequired,
  path      : React.PropTypes.string
};
