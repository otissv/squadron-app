import React from 'react';
import Navigation from './navigation-component-app';
// import Alert from './alert-component-app';
// import Notify from './notify-component-app';


export default class Layout extends React.Component  {
  componentWillMount () {
    this.props.getStorage();

  }


  render () {
    return <div>
      <Navigation  {...this.props}/>

      { this.props.children }

    </div>;
  }
}

Layout.propTypes = {
  children: React.PropTypes.any,
  getStorage: React.PropTypes.func
};
