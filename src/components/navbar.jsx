import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

class NavBar extends Component {
  navItems = [
    {
      display: "Home",
      link: "/#section-home"
    },
    {
      title: "About",
      link: "/#section-about"
    },
    {
      title: "Services",
      link: "/#section-services"
    },
    {
      title: "Portfolio",
      link: "/#section-portfolio"
    },
    {
      title: "Resume",
      link: "/#section-resume"
    },
    {
      title: "Contact",
      link: "/#section-contact"
    },
    {
      title: "Blog",
      link: "/blog#section-blog"
    }
  ];

  BASE_NAV_CLASSES =
    "navbar navbar-expand-lg site-navbar navbar-light bg-light ";
  BASE_NAV_BUTTON_CLASSES =
    "collapse navbar-collapse justify-content-md-center ";
  lastScrollTop = 0;

  state = {
    classes: new Set(),
    isOpen: false
  };

  handleScroll = () => {
    const scrollTop = window.scrollY;

    let classes = this.state.classes;
    let isOpen = this.state.isOpen;

    if (this.lastScrollTop - scrollTop < 200) {
      isOpen = false;
    }

    if (scrollTop > 200) {
      classes.add("scrolled");
    } else {
      classes.delete("scrolled");
      classes.delete("awake");
    }

    if (classes.has("scrolled") && scrollTop > 300) {
      if (scrollTop > this.lastScrollTop) {
        classes.delete("awake");
        classes.add("sleep");
      } else {
        classes.add("awake");
        classes.delete("sleep");
      }
      this.lastScrollTop = scrollTop;
    }

    this.setState({
      classes: classes,
      isOpen: isOpen
    });
  };

  mouseEnter = () => {
    let classes = this.state.classes;
    classes.add("awake");
    classes.delete("sleep");
    this.setState({
      classes: classes
    });
  };

  navButtonToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  componentDidMount = function() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("onMouseEnter", this.mouseEnter);
  };

  componentWillUnmount = function() {
    window.removeEventListener("scroll", this.handleScroll);
    window.addEventListener("onMouseEnter", this.mouseEnter);
  };

  render() {
    let classes =
      this.BASE_NAV_CLASSES + Array.from(this.state.classes).join(" ");

    let navButtonClasses =
      this.BASE_NAV_BUTTON_CLASSES +
      (this.state.isOpen === true ? " show" : "");

    return (
      <React.Fragment>
        <nav id="pb-navbar" className={classes} onMouseEnter={this.mouseEnter}>
          <div className="container">
            <button
              className="navbar-toggler"
              onClick={() => this.navButtonToggle()}
            >
              <span className="navbar-toggler-icon" />
            </button>

            <a className="navbar-brand" href="index.html">
              Problem Solved
            </a>
            <div className={navButtonClasses}>
              <ul className="navbar-nav">
                {this.navItems.map(navitem => (
                  <li className="nav-item" key={navitem.title}>
                    <Link
                      scroll={el =>
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "start"
                        })
                      }
                      to={navitem.link}
                      className="nav-link"
                      key={navitem.link}
                    >
                      {navitem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
