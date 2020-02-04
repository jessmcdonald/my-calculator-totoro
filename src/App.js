import React from 'react';
import totoro from './img/totoro.png'
import './App.css';
import Button from './components/button/button';
import Screen from './components/screen/screen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      digits: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      result: null
    };
  }

  render() {
    const {digits} = this.state.digits
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <body className="App-Body">
          <div className="Header">
          </div>
          <h3>My Calculator</h3>
          <h1>TOTORO</h1>
          <ul>
          {this.state.digits.map(item => (
            <Button key={item} digit={item}>{item}</Button>
          ))}
          </ul>
          
          <p>
          <img src={totoro} alt="Totoro" height="600" />
          </p>
        </body>
      </div>
    );


  }

 
}

export default App;
