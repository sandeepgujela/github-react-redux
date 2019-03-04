import React, { Component } from 'react';
import './App.css';
import IssuesComponent from '../issues/Issues'
import HeaderComponent from '../header/Header'
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent className="App-header"></HeaderComponent>
        <IssuesComponent></IssuesComponent>
      </div>
    );
  }
}

export default App;