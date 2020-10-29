import React, { useState } from "react";
import RadioButtons from "./RadioButtons";
import Input from "./Input";
import RadioButton from "./RadioButton";

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
  const [showDeliveryHours, setShowDeliveryHours] = useState(false);

  const send = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formState, null, 2));
  };

  const handleFormStateChange = (key) => (e) => {
    setFormState({ ...formState, [key]: e.target.value });
  };

  const test = (value) => {
    if (value === "ASAP") {
      setFormState({ ...formState, deliveryTime: value });
      setShowDeliveryHours(false);
    } else {
      setFormState({ ...formState, deliveryTime: "18.00" });
      setShowDeliveryHours(true);
    }
  };

  console.log("formState", formState);
  return (
    <form onSubmit={send}>
      <h2>Info</h2>
      <Input name="Imię" handleChange={handleFormStateChange("name")} />
      <Input name="Nazwisko" handleChange={handleFormStateChange("lastName")} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "360px",
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
          test("ASAP");
        }}
      />
      <RadioButton
        name="deliveryTime"
        id="chooseHours"
        value="Wybierz godzinę"
        onClick={() => test("chooseHours")}
      />
      <div>
        {showDeliveryHours && (
          <Input
            value={formState.deliveryTime}
            handleChange={handleFormStateChange("deliveryTime")}
          />
        )}
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
