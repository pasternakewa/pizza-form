import React from "react";

const RadioButtons = ({ name, options, handleChange }) => {
  const createRadioButton = options.map((option) => {
    return (
      <div>
        <label>{option}</label>
        <input type="radio" value={option} key={option} name={name} />
      </div>
    );
  });

  return (
    <div>
      <label>{name}</label>
      <div onChange={handleChange}>{createRadioButton}</div>
    </div>
  );
};

export default RadioButtons;
