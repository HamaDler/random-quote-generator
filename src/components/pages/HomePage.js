import React, { Component } from "react";
import { Container, Button, Grid } from "semantic-ui-react";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ""
    };
    this.getNewQuote = this.getNewQuote.bind(this);
  }

  getNewQuote = () => {
    fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(data => this.setState({ data }));
    console.log("new quote has been generated");
  };

  componentDidMount() {
    fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    let tweetURL =
      "https://twitter.com/intent/tweet?text=" +
      '"' +
      this.state.data.content +
      '"' +
      "  -" +
      this.state.data.author;
    return (
      <Grid textAlign="center" verticalAlign="middle">
        <Container>
          <div id="quote-box">
            <div className="ui message" id="text">
              <p>{this.state.data.content}</p>
              <div className="header" id="author">
                {this.state.data.author}
              </div>
              <button className="ui tumblr button" id="tweet-quote">
                <i className="tumblr icon"></i>
                Tumblr
              </button>
              <a
                className="ui twitter button"
                hashtags="nature,sunset" //DOESN'T WORK FOR SOME REASON
                via="twitterdev" //DOESN'T WORK
                href={tweetURL}
                id="tweet-quote"
              >
                <i className="twitter icon"></i>
                Twitter
              </a>
              <Button onClick={this.getNewQuote}>New quote</Button>
            </div>
          </div>
        </Container>
      </Grid>
    );
  }
}
