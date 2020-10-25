import React from "react";

const DEFAULT_WIDTH = "300px";

const TextInput = ({ name, width = DEFAULT_WIDTH, value, handleChange }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width,
        justifyContent: "start"
      }}
    >
      <label style={{ textAlign: "left" }} htmlFor={name}>
        {name}
      </label>
      <input
        id={name}
        type="text"
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default TextInput;
