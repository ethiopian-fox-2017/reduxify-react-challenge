export const addMovie = (title) => {
  return {
    type: 'ADD_MOVIE',
    payload: title
  }
}

export const fetchMovieSuccess = (movie) => {
  return {
    type: 'FETCH_MOVIE_SUCCESS',
    payload: movie
  }
}

export const fetchMovies = () => {
  return (dispatch) => {
    fetch('http://swapi.co/api/films')
    .then(res => res.json())
    .then(data => dispatch(fetchMovieSuccess(data.results)));
  }
}

export const deleteMovie = (episode_id) => {
  return {
    type: 'DELETE_MOVIE',
    payload: episode_id
  }
}

export const editMovieTitle = (episode_id, newMovieTitle) => {
  return {
    type: 'EDIT_MOVIE_TITLE',
    episode_id: episode_id,
    newMovieTitle: newMovieTitle
  }
}
