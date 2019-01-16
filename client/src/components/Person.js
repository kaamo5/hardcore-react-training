import React from "react";
import styles from "./Person.pcss";

import cx from "classnames";

const Person = props => {
  const { person } = props;
  const classes = cx(styles.person, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });

  return (
    <div className={classes}>
      <div>
        <strong>{person.lastName}</strong>, {person.firstName} ({person.age})
      </div>
    </div>
  );
};

export default Person;
