import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    content: (getData, setData) => (
      <p>
        Give me a noun.
        <br />
        <br />
        <input
          type="text"
          value={getData("noun")}
          onChange={event => setData("noun", event.target.value)}
        />
        <br />
        <br />
        Give me a plural noun.
        <br />
        <br />
        <input
          type="text"
          value={getData("plural noun 1")}
          onChange={event => setData("plural noun 1", event.target.value)}
        />
        <br />
        <br />
        Give me a verb (present tense).
        <br />
        <br />
        <input
          type="text"
          value={getData("verb 1")}
          onChange={event => setData("verb 1", event.target.value)}
        />
        <br />
        <br />
        Give me another verb (present tense).
        <br />
        <br />
        <input
          type="text"
          value={getData("verb 2")}
          onChange={event => setData("verb 2", event.target.value)}
        />
        <br />
        <br />
      </p>
    ),
    buttons: [{ label: "Continue", page: "question" }]
  },

  question: {
    content: (getData, setData) => (
      <p>
        Put down the name of a part of your body (plural).
        <br />
        <br />
        <input
          type="text"
          value={getData("body")}
          onChange={event => setData("body", event.target.value)}
        />
        <br />
        <br />
        Give me a adjective.
        <br />
        <br />
        <input
          type="text"
          value={getData("adjective")}
          onChange={event => setData("adjective", event.target.value)}
        />
        <br />
        <br />
        Give me a plural noun.
        <br />
        <br />
        <input
          type="text"
          value={getData("plural noun 2")}
          onChange={event => setData("plural noun 2", event.target.value)}
        />
        <br />
        <br />
        Give me the last adjective.
        <br />
        <br />
        <input
          type="text"
          value={getData("adjective 2")}
          onChange={event => setData("adjective 2", event.target.value)}
        />
        <br />
        <br />
      </p>
    ),
    buttons: [{ label: "Continue", page: "welcome" }]
  },

  welcome: {
    content: (getData, setName) => (
      <p align="left">
        Today, every student has a computer small enough to fit into his
        <font color="red"> {getData("noun")} </font>.
        <br />
        He can solve any math problem by simply pushing the computer's little
        <font color="red"> {getData("plural noun 1")} </font>.
        <br />
        Computers can add, multiply, divide, and
        <font color="red"> {getData("verb 1")} </font>.
        <br />
        They can also
        <font color="red"> {getData("verb 2")} </font>
        better than a human.Some computers are
        <font color="red"> {getData("body")} </font>.
        <br />
        Others have an
        <font color="red"> {getData("adjective")} </font>
        screen that shows all kinds of
        <font color="red"> {getData("plural noun 2")} </font>
        and
        <font color="red"> {getData("adjective 2")} </font>
        figures.
        <br />
      </p>
    ),

    buttons: [
      { label: "This is so funny", page: "Funny" },
      { label: "This is so boring", page: "Boring" }
    ]
  },

  Funny: {
    content: (getData, setName) => (
      <p align="left">
        Today, every student has a computer small enough to fit into his
        {getData("noun")}.
        <br />
        He can solve any math problem by simply pushing the computer's little
        {getData("plural noun 1")}.
        <br />
        Computers can add, multiply, divide, and
        {getData("verb 1")}.
        <br />
        They can also
        {getData("verb 2")}
        better than a human.Some computers are
        {getData("body")}.
        <br />
        Others have an
        {getData("adjective")}
        screen that shows all kinds of
        {getData("plural noun 2")}
        and
        {getData("adjective 2")}
        figures.
        <br />
      </p>
    ),
    buttons: [{ label: "Download", page: "death" }]
  },

  Boring: {
    content: (getData, setName) => <p>Let's have one more round!</p>,
    buttons: [{ label: "Restart", page: "start" }]
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start",
      name: ""
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  setData(dataName, dataValue) {
    var newState = {};
    newState[dataName] = dataValue;
    this.setState(newState);
  }

  render() {
    var pageData = pages[this.state.page];

    return (
      <div className="App">
        {pageData.content(
          dataName => this.state[dataName] || "",
          (name, value) => this.setData(name, value)
        )}
        {pageData.buttons.map(buttonInfo => (
          <button onClick={() => this.goToPage(buttonInfo.page)}>
            {buttonInfo.label}
          </button>
        ))}
      </div>
    );
  }
}

export default App;
