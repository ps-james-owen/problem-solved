import React, { Component } from "react";
import Page from "./components/page";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Page />
      </React.Fragment>
    );
  }
}

export default App;
