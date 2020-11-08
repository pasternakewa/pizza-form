import React from "react";

export const CheckBox = (props) => {
  return (
    <li>
      <input
        key={props.id}
        onClick={props.handleCheckChieldElement}
        type="checkbox"
        defaultChecked={props.isChecked}
        value={props.value}
      />{" "}
      {props.value}
    </li>
  );
};

export default CheckBox;
