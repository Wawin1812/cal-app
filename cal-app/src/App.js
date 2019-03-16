import React, { Component } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Result from "./components/Result";
//import * as math from "math.js";

function Percentage(props) {
  return props.number / 100;
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    };
  }

  onClick = button => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else if (button === "sqrt") {
      this.sqrt();
    } else if (button === "%") {
      this.percentage();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  sqrt() {
    try {
      this.setState({
        result: Math.sqrt(this.state.result)
      });
    } catch (error) {
      this.setState({
        result: ""
      });
    }
  }

  percentage() {
    try {
      this.setState({
        result: <Percentage number={this.state.result} />
      });
    } catch (error) {
      this.setState({
        result: ""
      });
    }
  }

  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  reset = () => {
    this.setState({
      result: ""
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="calculator">
          <h1>Simple Calculator</h1>
            <Result result={this.state.result} />
            <Buttons onClick={this.onClick} />
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
