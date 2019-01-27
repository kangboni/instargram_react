import React, { Component } from "react";
import { withRouter } from 'react-router';
import "./Enterance.css";

const logo = "./img/logo.png";

class Enterance extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="app">
        <img className="logo" src={logo} alt=""/>
        <button onClick={() => history.push('/login')} className="login">Login</button>
        <button className="register">Register</button>
      </div>
    );
  }
}

export default withRouter(Enterance);
