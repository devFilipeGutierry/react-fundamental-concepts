import React, { Component } from 'react';
import './App.css';

import Person from './components/Person/Person'
import Profession from './components/Profession/Profession'

class App extends Component {

  state = {
    persons: [
      { name: 'Philipe Ferreira', age: '25', profession: 'Software Developer' },
      { name: 'Rosilene', age: '47', profession: 'Lawyer' },
      { name: 'Isabelle Zaborosky', age: '23', profession: 'Biotechnologist' }
    ]
  }

  switchNameHandler = () => {
    this.setState(
      {
        persons: [
          { name: 'Filipe Ferreira', age: '25', profession: 'Software Developer' },
          { name: 'Rose', age: '47', profession: 'Lawyer' },
          { name: 'Isabelle Zaborosky', age: '23', profession: 'Biotechnologist' }
        ]
      }
    );
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Change name</button>
        <Person myClickFunction={this.switchNameHandler} name={this.state.persons[0].name} age={this.state.persons[0].age}>
          <Profession profession={this.state.persons[0].profession}></Profession>
        </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
          <Profession profession={this.state.persons[1].profession}></Profession>
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
          <Profession profession={this.state.persons[2].profession}></Profession>
        </Person>
      </div>
    );
  }
}

export default App;
