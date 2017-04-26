import { FETCH_SUCCESS } from '../constants'

export const fetchReducer = (state = [], action)=> {
  // console.log(action)
   switch(action.type) {
     case FETCH_SUCCESS: {
       return action.payload
     }
     default:
      return state
   }
 }