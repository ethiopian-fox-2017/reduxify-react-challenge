import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Main, Login } from './components'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data : [],
      isLogin: false,
      userData: null
    }
  }

  loginCheck() {
    if(localStorage.getItem('user')) {
      this.setState({ isLogin: true })
    } else {
      this.setState({ isLogin: false })
    }
  }

  handleUserData() {
    this.setState({userData: localStorage.getItem('user')})
  }

  logout() {
    localStorage.removeItem('user')
    window.location.reload()
  }

  componentDidMount() {
    this.handleUserData()
    this.loginCheck()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="nav zomatoed">
            <div className="nav-left">
              <h2 className="title is-4 nav-item">Zomatoed React</h2>
            </div>
            <div className="nav-right">
              <p className="nav-item"><Link to="/">Home</Link></p>
              { this.state.isLogin ?
                <a className="nav-item" onClick={this.logout}>Logout</a>
                :
                <p className="nav-item"><Link to="/login">Login</Link></p>
              }
            </div>
          </nav>

          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;