import React, { Component } from "react";

class NavBar extends Component {
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

  mouseLeave = () => {
    let classes = this.state.classes;
    classes.add("sleep");
    classes.delete("awake");
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
    window.addEventListener("onMouseLeave", this.mouseLeave);
  };

  componentWillUnmount = function() {
    window.removeEventListener("scroll", this.handleScroll);
    window.addEventListener("onMouseEnter", this.mouseEnter);
    window.addEventListener("onMouseLeave", this.mouseLeave);
  };

  render() {
    let classes =
      this.BASE_NAV_CLASSES + Array.from(this.state.classes).join(" ");

    let navButtonClasses =
      this.BASE_NAV_BUTTON_CLASSES +
      (this.state.isOpen === true ? " show" : "");

    return (
      <React.Fragment>
        <nav
          id="pb-navbar"
          className={classes}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        >
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
                {this.props.items.map(navitem => (
                  <li className="nav-item" key={navitem.title}>
                    <a
                      className="nav-link"
                      onClick={() => {
                        this.navButtonToggle();
                        this.props.scrollToPage(navitem.title);
                      }}
                    >
                      {navitem.title}
                    </a>
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
