import React, { Component } from 'react';

import HomeContainer from "../home/home.container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HomeContainer />
        </header>
      </div>
    );
  }
}

export default App;
