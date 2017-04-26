import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import {connect} from 'react-redux';


import { checkLoginStatus } from './actions';
import Home from './components/Home'
import Login from './components/Login'

class App extends Component {

  componentWillMount() {
    this.props.checkLoginStatus()
  }

  logOut() {
    window.localStorage.clear()
    window.location.reload()
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="nav has-shadow">
            <div className="container">
              <div className="nav-left">
                <a className="nav-item">
                  <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
                </a>
                <Link to="/" className="nav-item is-tab is-hidden-mobile">Home</Link>

              </div>

                {
                  this.props.isLogin ?
                  <div className="nav-right nav-menu">
                    <a className="nav-item is-tab is-hidden-mobile" onClick={() => this.logOut()}>Logout</a>
                  </div>
                  :
                  <div className="nav-right nav-menu">
                    <Link to="/login" className="nav-item is-tab is-hidden-mobile">Login</Link>
                  </div>
                }

            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />


          </Switch>

        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  isLogin: state.status.isLogin,
})

const mapDispatchToProps = dispatch => ({
  checkLoginStatus: () => dispatch(checkLoginStatus()),
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
