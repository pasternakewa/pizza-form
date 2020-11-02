import React from "react";

const DEFAULT_WIDTH = "300px";

const Textarea = ({ name, width = DEFAULT_WIDTH, handleChange, value }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width,
        justifyContent: "start"
      }}
    >
      <textarea id={name} onChange={handleChange} value={value} />
    </div>
  );
};

export default Textarea;
