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
  const send = () => {};
  const [formState, setFormState] = useState({});
  const handleFormStateChange = (key) => (e) => {
    setFormState({ ...formState, [key]: e.target.value });
  };

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
        options={["Man", "Woman", "Fluid"]}
        handleChange={handleFormStateChange("sex")}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
