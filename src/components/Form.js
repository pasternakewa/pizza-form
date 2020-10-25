import React, { useState } from "react";
import RadioButtons from "./RadioButtons";
import TextInput from "./TextInput";

/**
 * {
 *  name: string,
 *  lastName: string,
 *  age: string,
 *  sex: string
 *  deliveryTime: string
 *  additions: string[]
 *  note: string
 * }
 */

const Form = () => {
  const [formState, setFormState] = useState({});

  const send = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formState, null, 2));
  };

  const handleFormStateChange = (key) => (e) => {
    setFormState({ ...formState, [key]: e.target.value });
  };

  console.log("formState", formState);

  return (
    <form onSubmit={send}>
      <h2>Info</h2>
      <TextInput name="Imię" handleChange={handleFormStateChange("name")} />
      <TextInput
        name="Nazwisko"
        handleChange={handleFormStateChange("lastName")}
      />
      <TextInput name="Wiek" handleChange={handleFormStateChange("age")} />
      <RadioButtons
        name="Płeć"
        options={[
          {
            id: "1",
            value: "Man",
          },
          {
            id: "2",
            value: "Woman",
          },
          {
            id: "3",
            value: "Fluid",
          },
        ]}
        handleChange={handleFormStateChange("sex")}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
