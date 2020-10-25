import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Form />
      </div>
    );
  }
}

export default App;
