const initialState = []

const jokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_JOKES_SUCCESS': {
      let newState = action.payload
      return newState
    }
    case 'ADD_JOKE': {
      let newState = [ ...state, action.payload ]
      return newState
    }
    case 'REMOVE_JOKE': {
      let newState = state.filter((val, index) => index !== action.payload)
      return newState
    }
    default:
      return state;
  }
}

export default jokeReducer
