import React from "react";
import RadioButton from "./RadioButton";

const RadioButtons = ({ name, options, handleChange }) => {
  return (
    <div>
      <label>{name}</label>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {options.map(({ id, value }) => (
          <RadioButton
            key={id}
            id={id}
            name={name}
            value={value}
            onClick={handleChange}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioButtons;
