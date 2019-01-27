import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Enteracne from './pages/Enterance';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Enteracne} />
          <Route exact path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
