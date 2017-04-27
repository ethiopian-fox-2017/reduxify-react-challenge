import { CHANGE_LOGIN } from '../constants'

export const loginReducer = (state = null, action) => {
  switch(action.type) {
    case CHANGE_LOGIN: {
      return action.payload
    }
    default:
      return state
  }
}