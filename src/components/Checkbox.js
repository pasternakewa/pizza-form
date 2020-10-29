import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange }) => {
  <div>
    <label>{label}</label>;
    <input
      type="checkbox"
      name={label}
      checked={isSelected}
      onChange={onCheckboxChange}
    />
    ;
  </div>;
};

export default Checkbox;
