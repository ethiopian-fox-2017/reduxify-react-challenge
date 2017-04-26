const initialState = {
  isLogin : false
}

const loginReducer = (state = initialState,action) => {
  switch (action.type) {
    case 'CHECK_STATUS_LOGIN':
      let newState = {
        isLogin: action.payload
      }
      return newState
      break;
    default: return state
  }
}

export default loginReducer;
