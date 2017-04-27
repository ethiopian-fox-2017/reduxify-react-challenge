//Character Actions
export const addCharacter = character => ({
    type: 'ADD_CHARACTER',
    payload: character
})

export const getCharacters = characters => ({
  type: 'GET_CHARACTERS',
  payload: characters
})

export const fetchCharacters = () => {
  return (dispatch) =>
    fetch('http://swapi.co/api/people/')
    .then(res => res.json())
    .then(data => dispatch(getCharacters(data.results)))
}

export const deleteCharacter = (id) => ({
  type: 'DELETE_CHARACTER',
  payload: id,
})


//Planets Actions
export const getPlanets = planets => ({
  type: 'GET_PLANETS',
  payload: planets
})

export const fetchPlanets = () => {
  return (dispatch) =>
  fetch('http://swapi.co/api/planets')
  .then(res => res.json())
  .then(data => dispatch(getPlanets(data.results)))
}
