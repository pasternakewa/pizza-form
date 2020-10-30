import React from "react";
import Checkbox from "./Checkbox.js";

const Checkboxes = ({ extras, onCheckboxChange }) =>
  extras.map(({ id, value }) => (
    <div>
      <Checkbox
        label={value}
        isSelected="false"
        id={id}
        key={id}
        onChange={onCheckboxChange}
      />
    </div>
  ));

export default Checkboxes;
