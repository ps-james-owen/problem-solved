import React, { Component } from "react";
import About from "./about";
import SiteHero from "./siteHero";
import Services from "./services";
import Contact from "./contact";
import Resume from "./resume";
import Portfolio from "./portfolio";

class Contract extends Component {
  render() {
    return (
      <React.Fragment>
        <SiteHero />
        <About />
        <Services />
        <Portfolio />
        <Resume />
        <Contact />
      </React.Fragment>
    );
  }
}

export default Contract;
