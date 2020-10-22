import React from 'react';
import logo from './logo.svg';
import './Hello.css';

function Hello() {
  return (
    <div className="Hello f3 tc">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1>
          Hello brave new React world! Aman the Developer here :D
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play and make more apps!
        </a>
        <p>This world of react is full of possibilities...</p>
      </header>
    </div>
  );
}

export default Hello;