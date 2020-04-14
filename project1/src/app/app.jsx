import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import routes from './routes';
import configureStore from './configureStore';
import { history } from './middlewares';
import '../less/app.less';

require('./favicon.ico');
// eslint-disable-next-line no-underscore-dangle
const store = configureStore(window.__INITIAL_STATE__);

if (!window.Promise) {
  window.Promise = require('es6-promise').Promise;
}
if (!Array.prototype.find) {
  require('babel-polyfill');
}

render(<Root store={store} history={history} routes={routes} />,
  document.getElementById('root'));
