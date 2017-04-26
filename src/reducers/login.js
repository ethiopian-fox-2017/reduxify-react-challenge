
const initialState = {
  isLogin: null
}

export const login = (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_LOGIN': return state.isLogin = action.payload
    default: return state
  }
}