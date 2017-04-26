import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { login } from '../actions'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class LoginPage extends React.Component {
  state = {
    username: '',
    password: ''
  }

  componentWillMount() {
    if (localStorage.getItem('session') !== null) {
      let session = JSON.parse(localStorage.getItem('session'))
      if (session.username === 'admin') {
        this.props.login()
      }
    }
  }

  handleChange({ name, value }) {
    let state = {}; state[name] = value
    this.setState(state)
  }

  onLogin() {
    const { username, password } = this.state
    if (username === 'admin' && password === '1234') {
      this.props.login()
      let session = {
        username
      }
      localStorage.setItem('session', JSON.stringify(session))
    }
  }

  render() {
    return (
      <div>
      { this.props.auth.isLoggedIn ?
        (
          <Redirect to={{
            pathname: '/',
            state: { isLoggedIn: true }
          }}/>

        ) : (
          <div className="Login">
            <div>
              <TextField
                hintText="Username"
                floatingLabelText="Username"
                name="username"
                onChange={ (e) => this.handleChange(e.target) }
              />
            </div>
            <div>
              <TextField
                hintText="Password"
                floatingLabelText="Password"
                type="password"
                name="password"
                onChange={ (e) => this.handleChange(e.target) }
              />
            </div>
            <RaisedButton label="Login" onClick={ this.onLogin.bind(this) } />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)