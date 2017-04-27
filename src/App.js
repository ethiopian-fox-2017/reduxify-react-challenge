import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from './actions'

import JokesPage from './components/JokesPage'
import LoginPage from './components/LoginPage'

import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin()

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Toolbar>
              <ToolbarGroup firstChild={true}>

                <ToolbarSeparator />
                <Link to="/">
                  <RaisedButton
                    label="Jokes"
                    primary={true}
                  />
                </Link>

                <ToolbarSeparator />
                { this.props.auth.isLoggedIn ?
                  (
                    <RaisedButton
                      label="Logout"
                      primary={true}
                      onClick={ () => this.props.logout() }
                    />
                  ) :
                  (
                    <Link to="/login">
                      <RaisedButton
                        label="Login"
                        primary={true}
                      />
                    </Link>
                  )
                }

              </ToolbarGroup>
            </Toolbar>
            <div>
              <Route exact path="/" component={JokesPage}/>
              <Route path="/login" component={LoginPage}/>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
})

const mapDispatchToProps = dispatch => ({
  logout: (index) => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)