import React from "react";
import "./App.pcss";
import personService from "../services/person";
import PersonList from "./PersonList";
import AddPersonForm from "./AddPersonForm";

class App extends React.Component {
  state = {
    persons: []
  };

  async componentDidMount() {
    const persons = await personService.getPersons();

    this.setState(() => ({
      persons
    }));
  }

  firePerson = id => {
    return this.setState(state => {
      return {
        persons: state.persons.filter(p => p.id !== id)
      };
    });
  };

  hirePerson = person => {
    return this.setState(state => {
      return {
        persons: state.persons.concat([person])
      };
    });
  };

  render() {
    const { persons } = this.state;

    const isGood = person => {
      return person.gender === "m" && person.age < 30;
    };

    const goodPersons = persons.filter(isGood);
    const badPersons = persons.filter(p => !isGood(p));

    return (
      <div>
        <h1>Jankon Betoni ERP</h1>

        <AddPersonForm hirePerson={this.hirePerson} />

        <h2>Bad people</h2>
        <PersonList
          firePerson={this.firePerson}
          showMetaData
          type="bad"
          persons={badPersons}
        />

        <h2>Goodish people</h2>
        <PersonList
          firePerson={this.firePerson}
          type="good"
          persons={goodPersons}
        />
      </div>
    );
  }
}

export default App;
