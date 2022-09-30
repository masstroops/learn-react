import React from "react";

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = {
      isLoggedIn: false
    }
  }
  handleLoginClick() {
    this.setState({isLoggedIn: true})
  }
  handleLogoutClick() {
    this.setState({isLoggedIn: false})
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn
    let button
    if (isLoggedIn) button = <LoginButton onClick={this.handleLogoutClick} />
    else button = <LogoutButton onClick={this.handleLoginClick} />
    
    return (
      <div>
        元素变量 {button}
        与运算符 && {this.state.isLoggedIn && <div>与运算符</div> }
        三目运算符 {this.state.isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} /> : <LoginButton onClick={this.handleLoginClick} /> }
      </div>
    )
  }
}

export default LoginControl