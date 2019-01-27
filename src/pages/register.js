import React, { Component } from 'react';
import './Enterance.css';

const logo = './img/logo.png';

class register extends Component {
  render() {
    return (
      <div className="app">
         <img className="logo" src={logo} alt="" />
         <input className="nickname" placeholder="nickname" name="nickname"/>
         <input className="email1" placeholder="email" name="email"/>
         <input className="password1" placeholder="password" name="password"/>
         <button className="register1">Register</button>
      </div>
    );
  }
}

export default register;
