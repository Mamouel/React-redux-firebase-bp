import React, { Component } from 'react';

import firebase from "../../config/Firebase"

class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
      userID: undefined,
      username: undefined,
      persist: false
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" style={{ textAlign: "center" }} >
          <h1>MOSES</h1>
          <h2>Massive Online Sharing of Ecological Solutions</h2>

          <div style={{ margin: "auto", width: "50%", padding: 20, border: "1px solid black" }}>Search container</div>

          <h3>Advanced search</h3>
        </header>
      </div>
    );
  }
}

export default HomeContainer;
