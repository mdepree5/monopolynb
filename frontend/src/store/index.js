import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import session from './session';
import property from './property';
import review from './review';
import user from './user';

const rootReducer = combineReducers({
  session,
  property,
  review,
  user,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}




const configureStore = (preloadedState) => createStore(rootReducer, preloadedState, enhancer);

export default configureStore;