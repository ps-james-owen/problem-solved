import React, { Component } from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import About from "./about";
import Clients from "./clients";
import Services from "./services";
import SiteHero from "./siteHero";
import Portfolio from "./portfolio";
import Resume from "./resume";
import Blog from "./blog";
import Contact from "./contact";
import ReactDOM from "react-dom";

class Page extends Component {
  about = React.createRef();
  clients = React.createRef();
  services = React.createRef();
  portfolio = React.createRef();
  resume = React.createRef();
  blog = React.createRef();
  contact = React.createRef();

  state = {
    navItems: [
      {
        title: "Home",
        ref: this.about
      },
      {
        title: "About",
        ref: this.about
      },
      {
        title: "Services",
        ref: this.services
      },
      {
        title: "Portfolio",
        ref: this.portfolio
      },
      {
        title: "Resume",
        ref: this.resume
      },
      {
        title: "Blog",
        ref: this.blog
      },
      {
        title: "Contact",
        ref: this.contact
      }
    ]
  };

  isMobile = () => {
    return window.innerWidth < 992;
  };

  scrollToPage = navTitle => {
    const item = this.state.navItems.find(item => item.title === navTitle);
    ReactDOM.findDOMNode(item.ref.current).scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          items={this.state.navItems}
          isMobile={this.isMobile}
          scrollToPage={this.scrollToPage}
        />
        <SiteHero />
        <About ref={this.about} />
        {/* <Clients ref={this.clients} /> */}
        <Services ref={this.services} />
        <Portfolio ref={this.portfolio} />
        <Resume ref={this.resume} />
        <Blog ref={this.blog} />
        <Contact ref={this.contact} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Page;
