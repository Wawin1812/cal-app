import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";
import math from "math.js";

function Percentage(props) {
  return props.number / 100;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { display: "" };
    this.onClick = this.onClick.bind(this);
  }
  onClick(btn) {
    if (btn === "C") this.reset();
    else if (btn === "CE") this.backspace();
    else if (btn === "=") this.result();
    else if (btn === "sqrt") this.sqrt();
    else if (btn === "%") this.percentage();
    else if (this.state.length > 17)
      this.setState({
        display: this.state.display
      });
    else
      this.setState({
        display: this.state.display + btn
      });
  }

  reset() {
    this.setState({
      display: ""
    });
  }

  backspace() {
    try {
      this.setState({
        display: this.state.display.slice(0, -1)
      });
    } catch (error) {
      this.setState({
        display: ""
      });
    }
  }
  sqrt() {
    try {
      this.setState({
        display: Math.sqrt(this.state.display)
      });
    } catch (error) {
      this.setState({
        display: ""
      });
    }
  }
  percentage() {
    try {
      this.setState({
        display: <Percentage number={math.eval(this.state.display)} />
      });
    } catch (error) {
      this.setState({
        display: ""
      });
    }
  }

  result() {
    try {
      if (this.state.display.length <= 16)
        this.setState({
          display: math.eval(this.state.display)
        });
      else
        this.setState({
          display: this.state.display
        });
    } catch (error) {
      this.setState({
        display: "Incorrect Input"
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="cal">
            <Display display={this.state.display} />
            <Button onClick={this.onClick} />
          </div>
          <h1>Calculator Application</h1>
        </div>
      </div>
    );
  }
}

export default App;
