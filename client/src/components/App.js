import React from "react";
import "./App.pcss";
import PersonList from "./PersonList";
import AddPersonForm from "./AddPersonForm";
import Loading from "./Loading";

class App extends React.Component {
  async componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  render() {
    const { persons, hirePerson, firePerson, loading } = this.props;

    const isGood = person => {
      return person.gender === "m" && person.age < 30;
    };

    const goodPersons = persons.filter(isGood);
    const badPersons = persons.filter(p => !isGood(p));

    return (
      <div>
        {loading && <Loading />}
        <h1>Jankon Betoni ERP</h1>
        <AddPersonForm hirePerson={hirePerson} />

        <h2>Bad people</h2>
        <PersonList
          firePerson={firePerson}
          showMetaData
          type="bad"
          persons={badPersons}
        />

        <h2>Goodish people</h2>
        <PersonList firePerson={firePerson} type="good" persons={goodPersons} />
      </div>
    );
  }
}

export default App;
