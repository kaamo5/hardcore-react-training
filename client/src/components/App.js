import React from "react";
import Person from "./Person";

import "./App.pcss";

class App extends React.Component {
  state = {
    persons: [
      {
        id: "one",
        firstName: "Keke",
        lastName: "Kalifornia",
        gender: "m",
        age: 25
      },
      {
        id: "two",
        firstName: "Ana",
        lastName: "Stiletti",
        gender: "m",
        age: 29
      },
      {
        id: "three",
        firstName: "Ruusu",
        lastName: "Pubi",
        gender: "f",
        age: 45
      }
    ]
  };

  render() {
    const { persons } = this.state;

    return (
      <div>
        <h1>Jankon Betoni ERP</h1>

        {persons.map(person => (
          <Person person={person} key={person.id} />
        ))}
      </div>
    );
  }
}

export default App;
