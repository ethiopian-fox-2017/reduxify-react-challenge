import {combineReducers} from 'redux';

import trackReducer from './trackReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  tracks: trackReducer,
  status: loginReducer
})

export default rootReducer
