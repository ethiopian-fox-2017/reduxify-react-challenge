import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      isLogin: false,
    }
  }

  loginCheck() {
    if(localStorage.getItem('user')) {
      this.setState({ isLogin: true })
    } else {
      this.setState({ isLogin: false })
    }
  }

  componentDidMount() {
    this.loginCheck()
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value})
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }

  login() {
    localStorage.setItem('user', 'loggedin')
    window.location.reload()
  }

  render() {
    return (
      <div className="Login">

        { this.state.isLogin ?
          ( <Redirect to={{ pathname: '/' }} /> )
          :
          <div className="box login-container">
            <form>
              <div className="field">
                <p className="subtitle is-4 has-text-centered">Login Here</p>
                <label className="label">Username</label>
                <p className="control">
                  <input className="input" type="text" placeholder="input username" value={this.state.username} onChange={this.handleUsernameChange} required />
                </p>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <p className="control">
                  <input className="input" type="password" placeholder="Input Password" value={this.state.password} onChange={this.handlePasswordChange} required />
                </p>
              </div>
              <div className="field">
                <button className="control button is-primary" onClick={this.login}>Submit</button>
              </div>
            </form>
          </div>
        }

      </div>
    )
  }
}

export default Login