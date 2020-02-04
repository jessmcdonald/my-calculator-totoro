import React from 'react';
import totoro from './img/totoro.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body className="App-Body">
        <div className="Header">
        </div>
        <h3>My Calculator</h3>
        <h1>TOTORO</h1>
        <p>
        <img src={totoro} alt="Totoro" height="600" />
        </p>
      </body>
    </div>
  );
}

export default App;
