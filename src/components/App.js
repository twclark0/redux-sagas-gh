import React, { Component } from 'react';

import './App.css'

class App extends Component {

  state = {count: 0}
  
  handleQueue = () => {
    this.props.queueChannelRequest()
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    return (
      <div>
        <h1>Redux Saga</h1>
        <div>
          <h3># of Button Clicks {this.state.count}</h3>
          <h3># of Saga effects {this.props.starWars.people}</h3>
        </div>
        <button onClick={this.props.fetchStarWarsRequest}>Load More</button>
        <button onClick={this.handleQueue}>Queue Channel</button>
      </div>
    );
  }
}

export default App;
