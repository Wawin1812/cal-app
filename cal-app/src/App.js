import React, { Component } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Result from "./components/Result";

// Function to calculate the percentage value of the number
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
  //Function to perform on clicking the buttons
  onClick = button => {
    if (button === "=") {
      this.calculate();
    } else if (button === "AC") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else if (button === "sqrt") {
      this.sqrt();
    } else if (button === "%") {
      this.percentage();
    } else {
      this.setState({
        result: this.state.result + button //Number concatenation
      });
    }
  };
  //Function to calculate the square root of the number
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
  // Function to calculate the percentage value of the number
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
  // Calculate the value of the values entered by entering the operator and the operand
  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        //Using eval function to evaluate the results
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };
  // Clear the value to null
  reset = () => {
    this.setState({
      result: ""
    });
  };
  // Removing the values on pressing the button
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
            <h1>Calculator</h1>
            <Result result={this.state.result} />
            <Buttons onClick={this.onClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
