import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Main, Login } from './components'
import { connect } from 'react-redux'
import { changeLogin } from './actions'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : [],
      userData: null
    }
  }

  loginCheck() {
    if(localStorage.getItem('user')) {
      this.props.changeLogin(true)
    } else {
      this.props.changeLogin(false)
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
    console.log(this.props)
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
              { this.props.isLogin ?
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

const mapStateToProps = state => ({
  isLogin: state.isLogin
})

const mapDispatchToProps = dispatch => ({
  changeLogin(val) {dispatch(changeLogin(val))}
})

export default connect(mapStateToProps, mapDispatchToProps)(App);