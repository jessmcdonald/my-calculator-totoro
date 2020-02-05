import React from 'react';
import totoro from './img/totoro.png'
import './App.css';
import Screen from './components/screen/screen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "+", "-", "/", "*"],
      display: "",
      query: "",
      result: "answer"
    };
  }

  numberFunction = (value) => {
    this.setState({ display: value });
  };

  plusFunction = (value) => {
    this.setState({ display: value})
  };

  minusFunction = (value) => {
    this.setState({ display: value})
  };

  multiplyFunction = (value) => {
    this.setState({ display: value})
  };

  divideFunction = (value) => {
    this.setState({ display: value})
  };

  equalsFunction = () => {
    this.setState({ result: eval(this.state.query)});
    console.log(this.state.result);
    this.setState({ display: this.state.result});
  };

  clearScreen = () => {
    this.setState({ display: ""});
    this.setState({ query: ""});
    this.setState({ firstNumber: ""});
    this.setState({ secondNumber: ""});
  };

  handleButtonClicked = (value) => {
    if (value === "C") {
      this.clearScreen();
    } else {
      if (value === "=") {
        this.equalsFunction();
      } else {
        if (value === "+") {
          this.plusFunction(value);
        } else {
          if (value === "-") {
            this.minusFunction(value);
          } else {
            if (value === "*") {
              this.multiplyFunction(value);
            } else {
              if (value === "/") {
                this.divideFunction(value);
              } else {
                this.numberFunction(value);
              }
            }
          }
        }
      }
    }
  };

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
              <Screen key={this.state.display} display={this.state.display} handleButtonClicked={this.handleButtonClicked}/>
              </div>
              
              <div className="Button-Pad">
                <div className="Buttons">
                  {this.state.buttons.map(item => (
                    <button
                      key={item}
                      onClick={() =>
                        this.handleButtonClicked(item)
                      }
                      >
                        {item}
                    </button>
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
