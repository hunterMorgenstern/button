import React, { Component } from "react";
import axios from "axios";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "text to display",
      author: "Mr.Banana Man",
      display: false,
      quotes: [],
      fade: false
    };
    this.flipText = this.flipText.bind(this);
    this.newQuote = this.newQuote.bind(this);
  }

  componentWillMount() {
    axios
      .get("/api/quotes")
      .then(response => {
        this.setState({
          quotes: response.data.quotes
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
    const randomInt = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({
      fade: !this.state.fade,
      text: this.state.quotes[randomInt].quote,
      author: this.state.quotes[randomInt].name
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1 className="header">Button of Mystery</h1>
          <div className="buttons">
            <button onClick={this.flipText} className="main-button">
              {this.state.display ? "Hide text" : "Show Text"}
            </button>

            {this.state.display ? (
              <button onClick={this.newQuote} className="new-quote-button">
                New Quote
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>

        <div className="display-box">
          {this.state.display ? (
            <div className={this.state.fade ? "text" : "text-a"}>
              <p>{this.state.text}</p> <p className="author"> - {this.state.author}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Display;
