import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const URL = 'https://swapi.co/api/';
const QUERY = 'people/'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { people: [] };
    //this._getData = this._getData.bind(this);
  }
  getData() {
    fetch(URL + QUERY)
    .then(response => response.json())
    .then(people => this.setState({ people: people.results }))
    .catch(error => console.log(`Disturbance in the force there is: ${error}`))
  }

  render() {
    console.log(this.getData(),
      `2 render this.state.people ${this.state.people}`)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">REACT Star Wars API</h1>
        </header>
        <button onClick={this._getData}>
          USE THE FORCE
          press me!
        </button>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
