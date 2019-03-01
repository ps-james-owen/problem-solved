import React, { Component } from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Contract from "./components/contract";
import Blog from "./components/blog";
import { Route } from "react-router-dom";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Route exact path="/" component={Contract} />
        <Route exact path="/blog" component={Blog} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
