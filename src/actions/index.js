export const addJoke = joke => {
  let newJoke = {
    id: 99,
    setup: 'Who am I?',
    punchline: 'I am I'
  }
  return {
    type: 'ADD_JOKE',
    payload: newJoke,
  }
}

export const removeJoke = index => {
  return {
    type: 'REMOVE_JOKE',
    payload: index,
  }
}

export const login = () => {
  return {
    type: 'LOGIN',
  }
}

export const logout = () => {
  localStorage.removeItem('session')
  return {
    type: 'LOGOUT',
  }
}

export const fetchJokesSuccess = (jokes) => {
  return {
    type: 'FETCH_JOKES_SUCCESS',
    payload: jokes,
  }
}

export const fetchJokes = () => {
  return (dispatch) =>
    fetch(`https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten`)
      .then(res => res.json())
      .then(data => dispatch(fetchJokesSuccess(data)));
}