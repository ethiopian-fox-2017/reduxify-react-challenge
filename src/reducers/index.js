import { combineReducers } from 'redux'
import { loginReducer } from './login'
import { fetchReducer } from './fetch'

const rootReducer = combineReducers({
  isLogin : loginReducer,
  data: fetchReducer
})

export default rootReducer