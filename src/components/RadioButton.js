import React from "react";

const RadioButton = ({ id, onClick, value, name }) => (
  <div>
    <input
      {...{
        style: {
          marginLeft: 0,
        },
        type: "radio",
        value,
        name,
        id,
        onClick,
      }}
    />
    <label htmlFor={id}>{value}</label>
  </div>
);

export default RadioButton;
