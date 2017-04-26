import { combineReducers } from 'redux'

import userReducer from './userReducer'
import jokeReducer from './jokeReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
  jokes: jokeReducer,
  user: userReducer,
  auth: authReducer,
})

export default rootReducer