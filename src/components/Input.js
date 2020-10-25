import React from "react";

const DEFAULT_WIDTH = "300px";

const Input = ({
  name,
  width = DEFAULT_WIDTH,
  value,
  type = "text",
  handleChange
}) => {
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
        type={type}
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Input;
