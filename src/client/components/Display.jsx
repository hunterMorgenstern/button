import React, { Component } from "react";
import axios from "axios";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "text to display",
      display: false,
      i: 0,
      quotes: [
        {
          quote: "banana man",
          name: "Francis of Assisi"
        }
      ]
    };
    this.flipText = this.flipText.bind(this);
    this.newQuote = this.newQuote.bind(this);
  }

  componentWillMount() {
    axios
      .get("/api/quotes")
      .then(response => {
        this.setState({
          text: response.data.quote
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  flipText() {
    this.setState({
      display: !this.state.display
    });
  }

  newQuote() {
    this.setState({
      text: this.state.quotes[this.state.i].quote,
      i: this.state.i + 1
    });
  }

  render() {
    return (
      <div className="buttons">
        <button onClick={this.flipText} className="main-button">
          {this.state.display ? "Hide text" : "Show Text"}
        </button>
        <button onClick={this.newQuote} className="new-quote-button">
          New Quote
        </button>
        <div className="display-box">{this.state.display ? this.state.text : ""}</div>
      </div>
    );
  }
}

export default Display;
