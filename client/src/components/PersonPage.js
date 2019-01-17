import React from "react";

const PersonPage = props => {
  const { person } = props;

  if (!person) {
    return null;
  }

  return (
    <div>
      <h2>
        <strong>{person.lastName}</strong>, {person.firstName}
      </h2>
      <p>A sad life story.</p>
    </div>
  );
};

export default PersonPage;
