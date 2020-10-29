import React from "react";

const Checkbox = ({ label, isSelected, onChange }) => (
  <div>
    <label>{label}</label>
    <input {...{ type: "checkbox", name: label, isSelected, onChange }} />
  </div>
);

export default Checkbox;
