import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <label>
    <input
      type="checkbox"
      name={label}
      checked={isSelected}
      onChange={onCheckboxChange}
    />
    {label}
  </label>
);

export default Checkbox;
