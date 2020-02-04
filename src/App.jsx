import React from 'react';
import totoro from './img/totoro.png'
import './App.css';
import Button from './components/button/button';
import Screen from './components/screen/screen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "+", "-", "/", "*", "="],
      result: null
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <body className="App-Body">
          <div className="Header">
          </div>
          <h3>My Calculator</h3>
          <h1>TOTORO</h1>
          <div className="Totoro">
            <img src={totoro} alt="Totoro" height="600" className="Tototo-Img"/>

            <div className="Calculator">
              <div className="Display-Screen">
              <Screen/>
              </div>
              
              <div className="Button-Pad">
                <div className="Buttons">
                  {this.state.buttons.map(item => (
                    <Button key={item} digit={item}>{item}</Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    );


  }

 
}

export default App;
