import React, { Component } from "react";
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';



class App extends Component {
  state = {
    persons: [
      { id: 'abc1', name: "Josh", age: 39 },
      { id: 'abc2', name: "TC", age: 38 },
      { id: 'abc3', name: "Joslyn", age: 19 },
    ],
    otherState: "some other value",
    showPerson: false,
  };

  deletePersonHandler = (personIndex) => {
    // 2 ways to better handle const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
      // p.id is correct. putting in logical error for debugging training. put in userId to break
    });

    const person = { ...this.state.persons[personIndex] };

    // const person = Object.assign({}, this.state.personIndex

    person.name = event.target.value;
    // adding error for debugging example correct value is .target. set to input to break it

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    let persons = null;


    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />


      //  style.backgroundColor = 'red';
      //  style[':hover'] = {
      //    backgroundColor: 'salmon',
      //    color: 'black'
      //  };

    }

    return (
      <div className={classes.app}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
