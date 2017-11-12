import React, { Component } from 'react';

import './App.css'

class App extends Component {

  state = { open: false}

  handleFetchClick = () => {
    this.props.fetchStarWarsRequest()
    this.setState({open: true})
  }

  handleConfirmClick = () => {
    this.props.confirmFetchRequest()
    this.setState({open: false})
  }

  render() {
    return (
      <div>
        <h1>Redux Saga</h1>
        <div>
          { 
            this.props.starWars.people.map((person, i) => 
            <h4 key={i}>{person.name}</h4>
            )
          }
        </div>
        <div>
          <div style={!this.state.open ? {display: 'none'} : {}} className='model'>
            <button onClick={this.handleConfirmClick}>Confirm</button>
          </div>
        </div>
        <button onClick={this.handleFetchClick}>Load More</button>
      </div>
    );
  }
}

export default App;
