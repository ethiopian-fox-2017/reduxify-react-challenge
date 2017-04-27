const initialState = []

const trackReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TRACKS_SUCCESS':
      return action.payload
      break;
    default:
      return state;
  }
}

export default trackReducer;
