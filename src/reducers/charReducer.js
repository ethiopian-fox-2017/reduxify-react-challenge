const initialState = []

const charReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'ADD_CHARACTER' : {
      const uniqueId = state[state.length-1].id + 1;
      const newChar = {...action.payload, id: uniqueId};
      const newState = [...state, newChar];
      return newState
    }
    case 'GET_CHARACTERS' : {
      const characters = action.payload.map(character => ({
        id: character.url,
        name: character.name,
        birth_year: character.birth_year,
      }))
      const newState = characters
      return newState
    }
    case 'DELETE_CHARACTER' : {
      const deleteId = action.payload
      const newState = state.filter(character => character.id !== deleteId)
      return newState
    }
    default: return state
  }
}


export default charReducer;
