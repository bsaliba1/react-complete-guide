import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Baptiste", age: 22 },
      { name: "Mar", age: 20 },
      { name: "Antoine", age: 26 },
    ],
    otherState: "other state",
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Max", age: 22 },
        { name: "Mar", age: 20 },
        { name: "Antoine", age: 27 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is actually working!</p>
      <button onClick={switchNameHandler}> Switch Name </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement('div', {className: App}, React.createElement('h1', null, 'Does this work?'))
};

export default app;
