import React, { Component } from "react";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "text to display", display: false };
  }

  flipText = () => {
    this.setState({
      display: !this.state.display
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.flipText} className="main-button">
          Click to see text
        </button>
        <div className="display-box">
		      {this.state.display ? this.state.text : ""}
				</div>
      </div>
    );
  }
}

export default Display;
