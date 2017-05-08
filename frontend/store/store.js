// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger';

// import RootReducer from '../reducers/root_reducer';

// const logger = createLogger();
//
// const configureStore = (preloadedState = {}) => {
//   return createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger));
// };
//
//export default configureStore;


import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import RootReducer from '../reducers/root_reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger();
  middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => (
  createStore(RootReducer, preloadedState, applyMiddleware(...middlewares))
);

export default configureStore;
