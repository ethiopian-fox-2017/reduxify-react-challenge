const initialState = []

const planetReducer = (state= initialState, action) => {
  switch(action.type) {
    case 'GET_PLANETS' : {
      const planets = action.payload.map(planet => ({
        id: planet.url,
        name: planet.name,
      }))
      const newState = planets
      return newState
    }
    default: return state
  }
}

export default planetReducer;
