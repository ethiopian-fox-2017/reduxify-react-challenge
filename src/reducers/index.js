import { combineReducers } from 'redux'

import charReducer from './charReducer'
import planetReducer from './planetReducer'


const rootReducer = combineReducers({
  characters: charReducer,
  planets   : planetReducer,
});

export default rootReducer;
