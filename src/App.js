import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './component/layout/NavBar';
import Dashboard from './component/dashboard/Dashboard'
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path = '/' component = {Dashboard} />
        </Switch>
       
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
