import React, { Component } from 'react';

import './App.css';

import Header from './components/Header'
import Characters from './components/characters/Characters'
import Planets from './components/planets/Planets'
import CharForm from './components/characters/CharForm'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Characters />
        <CharForm />
        <Planets />
      </div>
    );
  }
}

export default App;
