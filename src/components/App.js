import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Sagas</h1>
        <button onClick={this.props.fetchStarWars}>Load More</button>
      </div>
    );
  }
}

export default App;
