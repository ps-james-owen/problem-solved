import React, { Component } from "react";
import SiteHero from "./siteHero";

class BlogPage extends Component {
  render() {
    return (
      <React.Fragment>
        <SiteHero />
        <section>
          <h1>This is is {this.props.id}</h1>
        </section>
      </React.Fragment>
    );
  }
}

export default BlogPage;
