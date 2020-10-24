import React, { useState } from "react";

const RadioButtons = (props) => {
  const [chosenValue, setChosenValue] = useState("");

  const createRadioButton = props.options.map((option) => {
    return (
      <div>
        <label>{option}</label>
        <input type="radio" value={option} key={option} name={props.name} />
      </div>
    );
  });

  return (
    <div>
      <label>{props.name}</label>
      <div onChange={() => setChosenValue(event.target.value)}>
        {createRadioButton}
      </div>
    </div>
  );
};

export default RadioButtons;
