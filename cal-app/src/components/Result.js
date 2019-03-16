import React from "react";
// Display the result for the operation of the calculator application
class Result extends React.Component {
  render() {
    return (
      <div className="result">
        <p>{this.props.result}</p>
      </div>
    );
  }
}

export default Result;
