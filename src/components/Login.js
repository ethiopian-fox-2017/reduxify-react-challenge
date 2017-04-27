import React from 'react'

class Login extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.onChangeState = this.onChangeState.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  onChangeState(e){
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
    // console.log(this.state.password);
  }

  signIn(){
    this.props.loginNow({username:this.state.username, password:this.state.password});
  }

  render(){
    return (
      <div>
        <div>
        User Name : <input onChange={this.onChangeState} type="text" name="username" />
        </div>
        <div>
        Password : <input onChange={this.onChangeState} type="password" name="password"  />
        </div>
        <button onClick={this.signIn}>Sign In </button>
      </div>
    )
  }

}

export default Login;
