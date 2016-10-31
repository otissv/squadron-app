import React from 'react';

export default class Signout extends React.Component{
 componentDidMount () {
   const {
     getStorage,
     deleteStorage,
     loggedIn,
     storage,
     redirectTo,
     unauthenticate
   } = this.props;

    deleteStorage();
    loggedIn(false);

    // Check to see if storage has data else get cookie
    const result = storage || getStorage().payload;
    unauthenticate(result.id);
    redirectTo('/');
 }

 render () {
   return <div>
     Logging out...
   </div>;
 }
}


Signout.propTypes = {
  deleteStorage : React.PropTypes.func.isRequired,
  getStorage    : React.PropTypes.func.isRequired,
  loggedIn      : React.PropTypes.func.isRequired,
  storage       : React.PropTypes.object.isRequired,
  redirectTo    : React.PropTypes.func.isRequired,
  unauthenticate: React.PropTypes.func.isRequired
};
