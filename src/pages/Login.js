import React, { Component } from 'react';
import './Enterance.css';

const logo = './img/logo.png';

class Login extends Component {
  render() {
    return (
      <div className="app">
         <img className="logo" src={logo} alt="" />
         <input className="email" placeholder="email" name="email"/>
         <input className="password" placeholder="password" name="password"/>
         <button className="login1">Login</button>
      </div>
    );
  }
}

export default Login;
