import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import NoMatch from './components/NoMatch'

class App extends Component {

  constructor(){
      super();
      this.state = {
        isLogin: false
      }
      this.loginFunction = this.loginFunction.bind(this);
      this.logout = this.logout.bind(this);
    }

    checkLogin(){
      if(window.localStorage.getItem('user')) return true;
      return false;
    }

  loginFunction(user){
    window.localStorage.setItem('user', user.username);
    this.setState({isLogin: true})
    console.log('--',window.localStorage.getItem('user'));
  }

  logout(){
    window.localStorage.removeItem('user');
    this.setState({isLogin: false})
  }

  render() {
    return (
    <BrowserRouter>
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div>
      <ul className="nav-ul">
        <li className="nav-li"><Link className="nav-link" to="/">Home</Link></li>
        {!this.checkLogin() ? (<div>
          <li className="nav-li"><Link className="nav-link" to="/login">Login</Link></li>
          <li className="nav-li"><Link className="nav-link" to="/signin">Signin</Link></li>
          </div>
        ) : (<li className="nav-li"><a href="#" className="nav-link" onClick={this.logout} >Logout</a></li>)}


      </ul>
      </div>

      <hr/>

      <Switch>

      <Route exact path="/" render={() => (
        !this.checkLogin() ? (
          <Redirect to="/login"/>
        ) : (
          <Home bla='blabla'/>
        )
      )}/>
      <Route path="/login" component={() => <Login loginNow={this.loginFunction}/>}/>
      <Redirect from="/signin" to="/login"/>
      <Route component={NoMatch}  />
      </Switch>

    </div>

    </BrowserRouter>
  )
}
}

export default App;
