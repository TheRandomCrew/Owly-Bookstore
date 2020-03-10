import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Wait for
          {' '}
          <code>Owly Bookstore&apos;s App</code>
          {' '}
          soon
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with React!
        </a>
      </header>
    </div>
  );
}

export default App;
