import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
import Validation from './Validation/Validation'
import Char from './Char/Char'

const app = props => {
  const [ personsState, setPersonsState ] = useState( {persons:[
      { id: 'hdleke', name: 'Max', age: 28},
      { id: 'uey', name: 'John', age: 25},
      { id: 'eie', name: 'Agrav-san', age: 24}
    ]}
  );

  const [textLengthState, setTextLengthState] = useState(0);

  const [userInputState, setUserInputState] = useState({userInput:""});


  const [ showPersonsState, setShowPersonsState ] = useState(false)


  const deletePersonHandler = (personIndex) => {
    const persons = [...personsState.persons];
    persons.splice(personIndex,1);
    setPersonsState({persons: persons})
  }


  const changeNameHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...personsState.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...personsState.persons]
    persons[personIndex] = person;
    setPersonsState({persons: persons})
  }


  const togglePersonsHandler = () => {
    setShowPersonsState(!showPersonsState)
  }

  const changeTextListener = (event) => {
    setUserInputState(event.target.value);
  }

    let persons = null;
    if (showPersonsState){
      persons = (
        <div>
          {personsState.persons.map((person, index) => {
            return (
              <Person
              key={person.id}
              click={() => deletePersonHandler(index)} 
              name={person.name} 
              age={person.age}
              changed={(event) => changeNameHandler(event, person.id)}/>
            )
          })}
        </div> 
      )
    }

    return (
      <div className="App">
        <h1>This is a React App</h1>
        <button className="SwitchButton" onClick={togglePersonsHandler}>Toggle Persons</button>
        {persons}
          <input type="text" 
          onChange={changeTextListener} 
          placeholder="Input Text Here" value={userInputState.userInput}
          />
          <p>{userInputState.userInput}</p>
        {/* <Validation textLength={userInputState.length} /> */}
      </div>
    );
  }

export default app;
