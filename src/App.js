import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from './Dashboard';
import Search from './Search';

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>App component</h1>
          </header>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/search' component={Search} />
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;
