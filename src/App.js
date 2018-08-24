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
    ],
    showPersons: true
  }

  switchNameHandler = (newName) => {
    this.setState(
      {
        persons: [
          { name: newName, age: '25', profession: 'Software Developer' },
          { name: 'Rose', age: '47', profession: 'Lawyer' },
          { name: 'Isabelle Zaborosky', age: '23', profession: 'Biotechnologist' }
        ]
      }
    );
  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons: [
          { name: event.target.value, age: '25', profession: 'Software Developer' },
          { name: 'Rose', age: '47', profession: 'Lawyer' },
          { name: 'Isabelle Zaborosky', age: '23', profession: 'Biotechnologist' }
        ]
      }
    )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <section>
            {
              this.state.persons.map(person => {
                return <Person
                  name={person.name}
                  age={person.age}>
                  <Profession title={person.profession}></Profession>
                </Person>
              })
            }
          </section>
      );
    }

    return (
      <div className="App">
        <h1>App</h1>

        <button style={style} onClick={this.switchNameHandler.bind(this, 'Viishh')}>Change name</button>
        <br />
        <br />
        <button style={style} onClick={this.togglePersonsHandler}>Hide/Show</button>
        {persons}
      </div>
    );
  }
}

export default App;
