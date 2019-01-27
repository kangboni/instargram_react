import React, { Component } from 'react';
import './App.css';

const logo = './img/logo.png';

class App extends Component {
  render() {
    return (
      <div className="app">
        <img className="logo" src={logo} />
        <button className="login">Login</button>
        <button className="register">Register</button>
      </div>
    );
  }
}

export default App;
