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
        <button onClick={this.flipText} className="main-button">
          {this.state.display ? "Hide text" : "Show Text"}
        </button>
        <div className="display-box">{this.state.display ? this.state.text : ""}</div>
      </div>
    );
  }
}

export default Display;
