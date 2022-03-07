//* Redux library import 
import { createStore, applyMiddleware, compose } from 'redux';

//* Reducer import
import reducer from '../reducers/index.js';

//* Ajax import
import ajax from '../middlewares/ajax';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(ajax),
);

const store = createStore(reducer, enhancers);

export default store;
