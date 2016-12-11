import React from 'react';
import Navigation from './Navigation-app';
import Sidebar from './Sidebar-app';
import Grid from 'react-uikit-grid';
import uikit from 'react-uikit-base';
import '../style-app.css';
// import Alert from './alert-component-app';
// import Notify from './notify-component-app';

const Col = uikit.element();


export default class Layout extends React.Component {
  componentWillMount () {
    this.props.getStorage();
  }

  render () {
    const props = this.props;


    const LoggedInPage = <Col col='1-1'>
      <Grid>
      <Col col='1-5' className='App-sidebar'>
        {this.props.isLoggedIn ? <Sidebar {...props} /> : null}
      </Col>

      <Col col='4-5' className='App-page'>
        { this.props.children }
      </Col>
      </Grid>
    </Col>;

    const NotLoggedInPage = <Col col='3-4' className='App-page'>
      { this.props.children }
    </Col>;

    return <Grid className='App-layout'>
      <Col col='1-1' className='App-navigation'>
        <Navigation {...props} />
      </Col>

      {this.props.isLoggedIn ? LoggedInPage : NotLoggedInPage}
    </Grid>;
  }
}

Layout.propTypes = {
  children: React.PropTypes.any,
  getStorage: React.PropTypes.func
};
