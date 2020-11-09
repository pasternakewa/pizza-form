import React, { useState } from "react";
import RadioButtons from "./RadioButtons";
import Input from "./Input";
import RadioButton from "./RadioButton";
import Textarea from "./Textarea";
import Checkbox from "./Checkbox";

/**
 * {
 *  name: string,
 *  lastName: string,
 *  age: string,
 *  sex: string
 *  deliveryTime: string
 *  extras: string[]
 *  note: string
 * }
 */
const OPTIONS = ["sos czosnkowy", "sos aioli", "sos BBQ"];

const Form = () => {
  const [formState, setFormState] = useState({});
  const [showDeliveryHours, setShowDeliveryHours] = useState(false);

  const send = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formState, null, 2));
  };

  const handleFormStateChange = (key) => (e) => {
    setFormState({ ...formState, [key]: e.target.value });
  };

  const handleDeliveryTimeStateChange = (value) => {
    if (value === "ASAP") {
      setFormState({ ...formState, deliveryTime: value });
      setShowDeliveryHours(false);
    } else {
      setFormState({ ...formState, deliveryTime: "18:00" });
      setShowDeliveryHours(true);
    }
  };

  const handleCheckboxChange = (e) => {
    const { name } = e.target;
    const formStateOptions = formState.options || [];
    const isExist = formStateOptions.includes(name);
    setFormState({
      ...formState,
      options: isExist
        ? formStateOptions.filter((el) => el !== name)
        : [...formStateOptions, name]
    });
  };

  return (
    <form onSubmit={send} onReset={() => setFormState({})}>
      <h2>Info</h2>
      <Input
        name="Imię"
        handleChange={handleFormStateChange("name")}
        value={formState.name}
      />
      <Input
        name="Nazwisko"
        handleChange={handleFormStateChange("lastName")}
        value={formState.lastName}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "300px",
          justifyContent: "space-between"
        }}
      >
        <Input
          style={{
            marginLeft: 0
          }}
          name="Wiek"
          width="80px"
          type="number"
          handleChange={handleFormStateChange("age")}
        />
        <RadioButtons
          style={{
            marginLeft: 0
          }}
          name="Płeć"
          options={[
            {
              id: "0",
              value: "Man"
            },
            {
              id: "1",
              value: "Woman"
            },
            {
              id: "2",
              value: "Fluid"
            }
          ]}
          handleChange={handleFormStateChange("sex")}
        />
      </div>
      <h2>Czas dostawy</h2>
      <RadioButton
        name="deliveryTime"
        id="asap"
        value="ASAP"
        onClick={() => {
          handleDeliveryTimeStateChange("ASAP");
        }}
      />
      <RadioButton
        name="deliveryTime"
        id="chooseHours"
        value="Wybierz godzinę"
        onClick={() => handleDeliveryTimeStateChange("chooseHours")}
      />
      <div>
        {showDeliveryHours && (
          <Input
            value={formState.deliveryTime}
            handleChange={handleFormStateChange("deliveryTime")}
          />
        )}
      </div>
      <h2>Dodatki</h2>
      {OPTIONS.map((option) => (
        <Checkbox
          isSelected={formState.options && formState.options.includes(option)}
          label={option}
          key={option}
          onCheckboxChange={handleCheckboxChange}
        />
      ))}{" "}
      <h2>Notatki</h2>
      <Textarea
        handleChange={handleFormStateChange("note")}
        value={formState.note}
      />
      <button type="reset">Clear</button>
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
