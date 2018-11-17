import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import NavBar from './component/layout/NavBar';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
