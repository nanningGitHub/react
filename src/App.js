import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>欢迎来到北京融顺科技</h2>
          <p>
            你可以在 <code>src/App.js</code> 文件中修改。
          </p>
          <a
            className = "App-link"
            href      = "https://reactjs.org"
            target    = "_blank"
            rel       = "noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
