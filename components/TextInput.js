import React from "react";
import { useState } from "react";

const TextInput = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <label>{props.name}</label>
      <input type="text" value={value} onChange={handleChange}></input>
    </div>
  );
};
export default TextInput;
