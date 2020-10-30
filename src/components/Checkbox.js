import React from "react";

const Checkbox = ({ label, id, onChange }) => (
  <div>
    <input {...{ type: "checkbox", name: label, onChange, id }} />
    <label htmlFor={id}>{label}</label>
  </div>
);

export default Checkbox;
