import React, { Component } from "react";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "text to display", display: false };
    this.flipText = this.flipText.bind(this);
  }

  flipText() {
    this.setState({
      display: !this.state.display
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.display ? this.state.text : ""}</div>
        <button onClick={this.flipText}>Click to see text</button>
      </div>
    );
  }
}

export default Display;
