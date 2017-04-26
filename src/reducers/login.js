
const initialState = {
  isLogin: false
}

export default function login(state = initialState, action) {
  switch(action.type) {
    case 'SET_LOGIN_TRUE': return state.isLogin = true
    default: return state
  }
}