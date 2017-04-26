import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'


import { fetchTracks, checkLoginStatus } from '../actions';
import TrackList from './TrackList'
import logo from '../logo.svg';
import '../App.css';


class Home extends Component {


  componentWillMount() {
    this.props.checkLoginStatus();
  }

  componentDidMount() {
    this.props.fetchTracks();
    console.log(this.props.isLogin);
  }

  render() {
    return (
      <div>
      {
        this.props.isLogin ?
        <div className="App container">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <br />
          <div className="columns is-mobile is-multiline">
          {this.props.tracks.length === 0 && <h1 className="subtitle">Loading...</h1>}

            {this.props.tracks.map(track => (
              <TrackList key={track.id} track={track}/>
            ))}
          </div>
        </div>
        :
        <Redirect to = {{ pathname: "/login" }} />


      }
      </div>

    )
  }
}

const mapStateToProps = state => ({
  tracks: state.tracks,
  isLogin: state.status.isLogin
})

const mapDispatchToProps = dispatch => ({
  fetchTracks: () => dispatch(fetchTracks()),
  checkLoginStatus: () => dispatch(checkLoginStatus())
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
