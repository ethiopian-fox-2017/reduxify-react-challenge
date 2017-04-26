import React from 'react';

import '../App.css';
import JokeList from './JokeList'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchJokes, addJoke } from '../actions'

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 20,
  paddingLeft: 30,
  paddingRight: 30,
  paddingBottom: 30,
  textAlign: 'center',
  display: 'inline-block',
};

class JokesPage extends React.Component {

  componentWillMount() {
    if (this.props.location.state !== undefined) {
      if (this.props.location.state.isLoggedIn) {
        this.setState({ isLoggedIn: true })
      }
    }
  }

  componentDidMount() {
    if (this.props.auth.isLoggedIn)
      this.props.fetchJokes()
  }

  removeJoke(removingIndex) {
    let newJokes = this.state.jokes.filter((joke, index) => index !== removingIndex)
    this.setState({ jokes: newJokes })
  }

  render() {
    return (
      <div>
        { this.props.auth.isLoggedIn ?
          (
          <div className="App">
            <Paper style={style} zDepth={2}>
            <h1>What Jokes Today ??</h1>
            <RaisedButton label="Add Joke" onClick={ () => this.props.addJoke() } />
            </Paper>
            <JokeList
              jokes={ this.props.jokes }
            />
          </div>
          ) :
          ( <Redirect to='/login'/> )

        }

      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  jokes: state.jokes,
});

const mapDispatchToProps = dispatch => ({
  fetchJokes: () => dispatch(fetchJokes()),
  addJoke: () => dispatch(addJoke()),
})

export default connect(mapStateToProps, mapDispatchToProps)(JokesPage)