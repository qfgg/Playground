import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import rootReducer from './reducers';


const composeEnhancers = process.env.NODE_ENV === 'local' ?
 (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

const composedCreateStore = composeEnhancers(

  applyMiddleware(thunk, promise)
)(createStore);

export default function configureStore(initalState = {}) {
  const store = composedCreateStore(rootReducer, initalState);

  return store;
}
