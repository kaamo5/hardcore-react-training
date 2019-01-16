import React from "react";
import { Formik } from "formik";
import uuid from "uuid";

const AddPersonForm = props => {
  const { hirePerson } = props;

  return (
    <Formik
      initialValues={{
        firstName: "Keke",
        lastName: "Kalifornia"
      }}
      onSubmit={values => {
        const newPerson = {
          ...values,
          id: uuid(),
          gender: "m",
          age: 25
        };

        hirePerson(newPerson);
      }}
    >
      {({ values, handleChange, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <label>ETUNIMI</label>
              <input
                id="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>SUKUNIMI</label>
              <input
                id="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="submit">PALKKAAA!</button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default AddPersonForm;
