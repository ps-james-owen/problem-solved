import React, { Component } from "react";
import NavBar from "./components/navbar";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div data-spy="scroll" data-target="#pb-navbar" data-offset="200">
        <NavBar />
      </div>
    );
  }
}

export default App;
