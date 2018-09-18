import React, { Component } from 'react';
import axios from 'axios';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'You pass butter.',
      author: 'Rick Sanchez',
      display: false,
      quotes: [],
      fade: false,
    };
    this.flipText = this.flipText.bind(this);
    this.newQuote = this.newQuote.bind(this);
  }

  componentDidMount() {
    axios.get('/api/quotes').then(response => {
      this.setState({
        quotes: response.data.quotes,
      });
    });
  }

  flipText() {
    const { display } = this.state;
    this.setState({
      display: !display,
    });
  }

  newQuote() {
    const { fade, quotes } = this.state;
    const randomInt = Math.floor(Math.random() * quotes.length);
    this.setState({
      fade: !fade,
      text: quotes[randomInt].quote,
      author: quotes[randomInt].name,
    });
  }

  render() {
    const { display, fade, text, author } = this.state;
    return (
      <div className="display">
        <div className="sup-header" />
        <header>
          <h1 className="title">Button</h1>
        </header>

        <section className={display ? 'display-box' : ' hide'}>
          {display ? (
            <div className={fade ? 'text' : 'text-a'}>
              <p>{text}</p> <p className="author"> - {author}</p>
            </div>
          ) : (
            ''
          )}
        </section>

        <section className="buttons">
          <button onClick={this.flipText} className="main-button" type="button">
            {display ? 'Hide Quote' : 'Show Quote'}
          </button>

          {display ? (
            <button
              onClick={this.newQuote}
              className="new-quote-button"
              type="button"
            >
              New Quote
            </button>
          ) : (
            <div />
          )}
        </section>

        <footer>
          <nav>
            <ul>
              <li className="footer-link">
                <a href="https://github.com/hunterMorgenstern/button">GitHub</a>
              </li>
            </ul>
          </nav>
        </footer>
        <div />
      </div>
    );
  }
}

export default Display;
