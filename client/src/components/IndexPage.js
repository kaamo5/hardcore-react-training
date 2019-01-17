import React from "react";
import PersonList from "./PersonList";
import AddPersonForm from "./AddPersonForm";

class IndexPage extends React.Component {
  render() {
    const { persons, hirePerson, firePerson } = this.props;

    const isGood = person => {
      return person.gender === "m" && person.age < 30;
    };

    const goodPersons = persons.filter(isGood);
    const badPersons = persons.filter(p => !isGood(p));

    return (
      <div>
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

export default IndexPage;
