import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Login from './components/Login';

class App extends Component {
  render() {
    return(
      <div className="App">
        <NavigationBar />
        <Login />
      </div>
    );
  }
}

export default App;