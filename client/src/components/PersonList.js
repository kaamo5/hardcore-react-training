import React from "react";
import Person from "./Person";
import styles from "./PersonList.pcss";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
import cx from "classnames";

const PersonList = props => {
  const { persons, type, showMetaData, firePerson } = props;

  const averageAge =
    persons.reduce((r, person) => r + person.age, 0) / persons.count();

  const classes = cx(styles.box, {
    [styles.bad]: type === "bad",
    [styles.good]: type === "good"
  });

  return (
    <div className={classes}>
      {showMetaData && (
        <>
          <p>Avarage age: {averageAge.toFixed(2)}</p>
          <p>Number of people: {persons.count()}</p>
        </>
      )}

      {persons
        .map(person => (
          <Person firePerson={firePerson} person={person} key={person.id} />
        ))
        .toList()}
    </div>
  );
};

PersonList.propTypes = {
  firePerson: PropTypes.func.isRequired,
  persons: ImmutablePropTypes.map.isRequired,
  showMetaData: PropTypes.bool.isRequired
};

PersonList.defaultProps = {
  showMetaData: false
};

export default PersonList;
