import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import DevTools from './devtools/dev-tools-component';
import reducers from './reducers';

export default compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
)(createStore)(reducers);
