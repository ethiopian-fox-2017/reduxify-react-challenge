import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import { checkLoginStatus } from '../actions';



class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this)


  }

  componentWillMount() {
    // this.checkLoginState();
    this.props.checkLoginStatus()
    console.log(this.props.isLogin);
  }

  componentDidMount() {
    // this.props.checkLoginStatus()
  }

  handleChange(e) {
    let state = {}
    state[e.target.name] = e.target.value;
    this.setState(state)
    // console.log(e.target);
  }

  setLocalStorage() {
    if(this.state.username !== '' && this.state.password !=='') {
      window.localStorage.setItem('user',this.state.username)
      window.location.reload()
    } else {
      alert('Username and password must be filled')
    }
  }

  render() {
    return (
      <div>
      {
        this.props.isLogin ?
        <Redirect to={{ pathname:'/' }} />
        :
        <div className="container">
            <div>
              <br/>
              <p className="title"> Login Dulu lah</p>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="email"
                    name="username"
                    placeholder="Email"
                    onChange={this.handleChange}
                    value={this.state.username}
                  />

                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control">

                  <button className="button is-success" onClick={() => (this.setLocalStorage())}>
                    Login
                  </button>
                </p>
              </div>
            </div>
        </div>
      }
      </div>

    )
  }
}

const mapStateToProps = state => ({
  isLogin: state.status.isLogin,
})

const mapDispatchToProps = dispatch => ({
  checkLoginStatus: () => dispatch(checkLoginStatus()),
})


export default connect(mapStateToProps,mapDispatchToProps)(Login)
