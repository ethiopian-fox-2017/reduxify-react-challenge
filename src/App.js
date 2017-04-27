import React, { Component } from 'react';
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm';


import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>STAR WARS</h2>
        </div>
        <div style={{textAlign: 'left'}}>
          <MovieList />
          <AddMovieForm />

        </div>
      </div>
    );
  }
}

export default App;
