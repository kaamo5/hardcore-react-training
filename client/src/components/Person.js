import React from "react";
import styles from "./Person.pcss";
import Button from "./Button";
import { Link } from "react-router-dom";

import cx from "classnames";

const Person = props => {
  const { person, firePerson } = props;
  const classes = cx(styles.person, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });

  return (
    <div className={classes}>
      <div>
        <strong>{person.lastName}</strong>, {person.firstName} ({person.age})
      </div>
      <div className="actions">
        <Button
          block
          disabled={person.isBeingFired}
          onClick={() => firePerson(person.id)}
        >
          LOMAUTA
        </Button>
        <Link to={`/person/${person.id}`}>Tarkastele henkilön tietoja</Link>
      </div>
    </div>
  );
};

export default Person;
