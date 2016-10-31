import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './vendor/uikit/css/uikit.min.css';


import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
