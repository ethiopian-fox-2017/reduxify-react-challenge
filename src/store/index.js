import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const middlewares = applyMiddleware(thunk);
const store = createStore(rootReducer, middlewares);

console.log("INI ADALAH ISI DARI STORE: ", store.getState());

export default store;
