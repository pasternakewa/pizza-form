import React from "react";

const DEFAULT_WIDTH = "300px";

const Input = ({
  name,
  value = "",
  width = DEFAULT_WIDTH,
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
      <input id={name} type={type} onChange={handleChange} value={value} />
    </div>
  );
};

export default Input;
