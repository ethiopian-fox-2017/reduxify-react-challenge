import React from 'react';
import { connect } from 'react-redux';

import { fetchMovies, deleteMovie } from '../actions';
import EditMovieForm from './EditMovieForm';

class MovieList extends React.Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render () {
    return (
      <div className="App-intro">
      {this.props.movieList.length === 0 && <h1>Now Loading...</h1>}
        { this.props.movieList.map(
          (movie, index) =>
            <div key={index}>
              <p>
              Episode {movie.episode_id} - {movie.title}
              <button type="submit" onClick={ () => this.props.deleteMovie(movie.episode_id) } style={{borderRadius:'10px',backgroundColor:'red',color:'white',marginLeft:'10px'}}> X </button></p>
              <EditMovieForm episode_id={movie.episode_id} newMovieTitle={movie.title}/>

              <hr />
            </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    movieList: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    deleteMovie: (episode_id) => dispatch(deleteMovie(episode_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
