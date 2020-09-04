import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ personsState, setPersonsState ] = useState(
    {
      persons: [
        { name:'Josh', age: 39},
        { name: 'TC', age: 38},
        { name: 'Joslyn', age: 19}
      ],
      
    }
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Joshua';
    setPersonsState({persons: [
     { name:'Joshua', age: 39},
     { name: 'TC', age: 38},
     { name: 'Joslyn', age: 20}
    ],
        otherState: personsState.otherState
   } )
   };

   return (
    <div className="App">
     <h1>Hi, I'm a React App</h1>
     <p>This is really working!</p>
     <button onClick={switchNameHandler}>Switch Name</button>
     <Person name={personsState.persons[0].name} age= {personsState.persons[0].age}/>
     <Person name={personsState.persons[1].name} age= {personsState.persons[1].age}> My Hobbies: Riverdale </Person>
     <Person name={personsState.persons[2].name} age= {personsState.persons[2].age} />
    </div>
   );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  };


export default app;



