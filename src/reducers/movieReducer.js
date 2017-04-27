const initialState = []

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIE_SUCCESS': {
      const movies = action.payload.map(movie => {
        return {
          episode_id: movie.episode_id,
          title: movie.title,
          description: movie.opening_crawl,
          director: movie.director
        }
      });

      const newState = movies
      return newState;
    }

    case 'ADD_MOVIE': {
      const moviesId = state.map(movie => movie.episode_id)
      let maxId = 0;
      if(state.length !== 0) {
        maxId = Math.max(...moviesId);
      }
      const newMovie = {
        episode_id: maxId + 1,
        title: action.payload,
        description: '',
        director: ''
      };
      const newMovies = [...state, newMovie];
      return newMovies;
    }

    case 'DELETE_MOVIE': {
      const deletedId = action.payload;
      const newMovies = state.filter(movie => movie.episode_id !== deletedId);
      return newMovies;
    }

    case 'EDIT_MOVIE_TITLE': {
      const episode_id = action.episode_id;
      const newMovieTitle = action.newMovieTitle;
      console.log("EP: ", episode_id);
      console.log("TITLE: ", newMovieTitle);

      const newMovies = state.map((movie) => {
        const movieId = movie.episode_id;
        const movieTitle = movie.title;
        return episode_id === movieId ? {episode_id: movieId, title: newMovieTitle} : {episode_id: movieId, title: movieTitle}
      })
      return newMovies;
    }
    default: return state;
  }
}

export default movieReducer;
