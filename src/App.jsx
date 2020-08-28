import React from "react";
import totoro from "./img/totoro.png";
import "./App.css";
import Screen from "./components/screen/screen";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "+", "-", "/", "*"],
      display: "",
      query: "",
      result: "",
    };
  }

  numberFunction = (value) => {
    this.setState((prev) => ({
      ...prev,
      display: prev.display + value,
      query: prev.query + value,
    }));
  };

  actionFunction = (value) => {
    this.setState((prev) => ({
      ...prev,
      display: value,
      query: prev.query + value,
    }));
    this.clearDisplay();
  };

  equalsFunction = () => {
    let query = this.state.query;
    try {
      let answer = eval(query);
      this.setState((prev) => ({
        ...prev,
        result: answer,
        display: answer,
        query: answer,
      }));
    } catch (error) {
      console.log(error);
      this.setState({ display: "error" });
    }
  };

  clearDisplay = () => {
    this.setState({ display: "" });
  };

  clearQuery = () => {
    this.setState((prev) => ({ ...prev, display: "", query: "" }));
  };

  handleButtonClicked = (value) => {
    if (value === "C") {
      this.clearQuery();
    } else {
      if (value === "=") {
        this.equalsFunction();
      } else {
        if (value === "+" || value === "-" || value === "*" || value === "/") {
          this.actionFunction(value);
        } else {
          this.numberFunction(value);
        }
      }
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <div className="App-Body">
          <div className="Header"></div>
          <h3>My Calculator</h3>
          <h1>TOTORO</h1>
          <div className="Totoro">
            <img src={totoro} alt="Totoro" className="Totoro-Img" />

            <div className="Calculator">
              <div className="Display-Screen">
                <Screen
                  key={this.state.display}
                  display={this.state.display}
                  handleButtonClicked={this.handleButtonClicked}
                />
              </div>

              <div className="Button-Pad">
                <div className="Buttons">
                  {this.state.buttons.map((item) => (
                    <button
                      key={item}
                      onClick={() => this.handleButtonClicked(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
