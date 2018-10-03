import React, { Component } from "react";

class NavBar extends Component {
  state = {
    classes: "",
    lastScrollTop: 0
  };

  handleScroll = event => {
    const scrollTop = window.scrollY;
    let lastScrollTop = this.state.lastScrollTop;

    let classes = "";
    // if (scrollTop > 200) {
    //   classes = "scrolled open";
    // }
    if (scrollTop <= 100) {
      classes = "sleep";
    }
    if (scrollTop > 100) {
      if (scrollTop > lastScrollTop) {
        classes = "scrolled sleep";
      } else {
        classes = "scrolled awake";
      }
      lastScrollTop = scrollTop;
    }

    this.setState({
      classes: classes,
      lastScrollTop: lastScrollTop
    });
  };

  componentDidMount = function() {
    window.console.log("Component did mount");
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = function() {
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    let classes = "navbar navbar-expand-lg site-navbar navbar-light bg-light ";
    classes += this.state.classes;
    return (
      <React.Fragment>
        <nav className={classes} id="pb-navbar">
          <div className="container">
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarsExample09"
              aria-controls="navbarsExample09"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <a className="navbar-brand" href="index.html">
              Alias
            </a>
            <div
              className="collapse navbar-collapse justify-content-md-center"
              id="navbarsExample09"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#section-home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section-about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section-services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section-portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section-resume">
                    Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section-blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section-contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section
          className="site-hero"
          style={{ backgroundImage: `url(images/image_1.jpg)` }}
          id="section-home"
          data-stellar-background-ratio="0.5"
        >
          <div className="container">
            <div className="row intro-text align-items-center justify-content-center">
              <div className="col-md-10 text-center">
                <h1 className="site-heading site-animate fadeInUp site-animated">
                  Howdy, I'm <strong>James Owen</strong>
                </h1>
                <p className="lead site-subheading mb-4 site-animate fadeInUp site-animated">
                  A Product Designer working at Facebook. Separated they live in
                  Bookmarksgrove right at the coast of the Semantics, a large
                  language ocean.
                </p>
                <p>
                  <a
                    href="#section-about"
                    className="smoothscroll btn btn-primary px-4 py-3"
                  >
                    More On Me
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="site-section" id="section-about">
          <div className="container">
            <div className="row mb-5 align-items-center">
              <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
                <img
                  src="images/image_1_long.jpg"
                  alt="Image placeholder"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-5 pl-lg-5">
                <div className="section-heading">
                  <h2>
                    About <strong>Me</strong>
                  </h2>
                </div>
                <p className="lead">
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p className="mb-5  ">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>

                <p>
                  <a
                    href="#section-contact"
                    className="btn btn-primary px-4 py-2 btn-sm smoothscroll"
                  >
                    Hire Me
                  </a>
                  <a href="#" className="btn btn-secondary px-4 py-2 btn-sm">
                    Download CV
                  </a>
                </p>
              </div>
            </div>

            <div className="row pt-5">
              <div className="col-md-3 mb-3">
                <div className="section-heading">
                  <h2>
                    My <strong>Skills</strong>
                  </h2>
                </div>
              </div>
              <div className="col-md-9">
                <div className="skill">
                  <h3>Design</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: 85 }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span>85%</span>
                    </div>
                  </div>
                </div>

                <div className="skill">
                  <h3>HTML5</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: 98 }}
                      aria-valuenow="98"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span>98%</span>
                    </div>
                  </div>
                </div>

                <div className="skill">
                  <h3>CSS3</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: 97 }}
                      aria-valuenow="97"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span>97%</span>
                    </div>
                  </div>

                  <div className="skill">
                    <h3>WordPress</h3>
                    <div className="progress" />
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: 88 }}
                      aria-valuenow="88"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span>88%</span>
                    </div>
                  </div>
                </div>

                <div className="skill">
                  <h3>Bootstrap</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: 92 }}
                      aria-valuenow="92"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span>92%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="site-section bg-light">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12">
                <div className="section-heading text-center">
                  <h2>
                    Client <strong>Testimonial</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="block-47 d-flex mb-5">
                  <div className="block-47-image">
                    <img
                      src="images/person_1.jpg"
                      alt="Image placeholder"
                      className="img-fluid"
                    />
                  </div>
                  <blockquote className="block-47-quote">
                    <p>
                      &ldquo;Far far away, behind the word mountains, far from
                      the countries Vokalia and Consonantia, there live the
                      blind texts. Separated they live in Bookmarksgrove right
                      at the coast of the Semantics, a large language
                      ocean.&rdquo;
                    </p>
                    <cite className="block-47-quote-author">
                      &mdash; Ethan McCown, CEO <a href="#">XYZ Inc.</a>
                    </cite>
                  </blockquote>
                </div>
              </div>
              <div className="col-md-6">
                <div className="block-47 d-flex mb-5">
                  <div className="block-47-image">
                    <img
                      src="images/person_2.jpg"
                      alt="Image placeholder"
                      className="img-fluid"
                    />
                  </div>
                  <blockquote className="block-47-quote">
                    <p>
                      &ldquo;Far far away, behind the word mountains, far from
                      the countries Vokalia and Consonantia, there live the
                      blind texts. Separated they live in Bookmarksgrove right
                      at the coast of the Semantics, a large language
                      ocean.&rdquo;
                    </p>
                    <cite className="block-47-quote-author">
                      &mdash; Craig Gowen, CEO <a href="#">XYZ Inc.</a>
                    </cite>
                  </blockquote>
                </div>
              </div>

              <div className="col-md-6">
                <div className="block-47 d-flex mb-5">
                  <div className="block-47-image">
                    <img
                      src="images/person_3.jpg"
                      alt="Image placeholder"
                      className="img-fluid"
                    />
                  </div>
                  <blockquote className="block-47-quote">
                    <p>
                      &ldquo;Far far away, behind the word mountains, far from
                      the countries Vokalia and Consonantia, there live the
                      blind texts. Separated they live in Bookmarksgrove right
                      at the coast of the Semantics, a large language
                      ocean.&rdquo;
                    </p>
                    <cite className="block-47-quote-author">
                      &mdash; Ethan McCown, CEO <a href="#">XYZ Inc.</a>
                    </cite>
                  </blockquote>
                </div>
              </div>
              <div className="col-md-6">
                <div className="block-47 d-flex mb-5">
                  <div className="block-47-image">
                    <img
                      src="images/person_4.jpg"
                      alt="Image placeholder"
                      className="img-fluid"
                    />
                  </div>
                  <blockquote className="block-47-quote">
                    <p>
                      &ldquo;Far far away, behind the word mountains, far from
                      the countries Vokalia and Consonantia, there live the
                      blind texts. Separated they live in Bookmarksgrove right
                      at the coast of the Semantics, a large language
                      ocean.&rdquo;
                    </p>
                    <cite className="block-47-quote-author">
                      &mdash; Craig Gowen, CEO <a href="#">XYZ Inc.</a>
                    </cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="site-section border-top pb-0" id="section-services">
          <div className="container">
            <div className="row mb-4">
              <div className="col-md-12">
                <div className="section-heading text-center">
                  <h2>
                    My <strong>Services</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 text-center mb-5">
                <div
                  className="site-service-item site-animate"
                  data-animate-effect="fadeIn"
                >
                  <span className="icon">
                    <span className="icon-phone3" />
                  </span>
                  <h3 className="mb-4">Mobile Optimize</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <p>
                    <a href="#" className="site-link">
                      Learn More <i className="icon-chevron-right" />
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 text-center mb-5">
                <div
                  className="site-service-item site-animate"
                  data-animate-effect="fadeIn"
                >
                  <span className="icon">
                    <span className="icon-wallet2" />
                  </span>
                  <h3 className="mb-4">Increase Revenue</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                  <p>
                    <a href="#" className="site-link">
                      Learn More <i className="icon-chevron-right" />
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 text-center mb-5">
                <div
                  className="site-service-item site-animate"
                  data-animate-effect="fadeIn"
                >
                  <span className="icon">
                    <span className="icon-lightbulb" />
                  </span>
                  <h3 className="mb-4">Intuitive Idea</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar.
                  </p>
                  <p>
                    <a href="#" className="site-link">
                      Learn More <i className="icon-chevron-right" />
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 text-center mb-5">
                <div
                  className="site-service-item site-animate"
                  data-animate-effect="fadeIn"
                >
                  <span className="icon">
                    <span className="icon-phone3" />
                  </span>
                  <h3 className="mb-4">Mobile Optimize</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <p>
                    <a href="#" className="site-link">
                      Learn More <i className="icon-chevron-right" />
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 text-center mb-5">
                <div
                  className="site-service-item site-animate"
                  data-animate-effect="fadeIn"
                >
                  <span className="icon">
                    <span className="icon-wallet2" />
                  </span>
                  <h3 className="mb-4">Increase Revenue</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                  <p>
                    <a href="#" className="site-link">
                      Learn More <i className="icon-chevron-right" />
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 text-center mb-5">
                <div
                  className="site-service-item site-animate"
                  data-animate-effect="fadeIn"
                >
                  <span className="icon">
                    <span className="icon-lightbulb" />
                  </span>
                  <h3 className="mb-4">Intuitive Idea</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar.
                  </p>
                  <p>
                    <a href="#" className="site-link">
                      Learn More <i className="icon-chevron-right" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="site-section" id="section-features">
          <div className="container">
            <div className="row site-section">
              <div className="col-md-8">
                <p>
                  <img src="images/laptop_1.jpg" alt="" className="img-fluid" />
                </p>
              </div>
              <div className="col-md-4">
                <h3 className="mb-3">Big Benefits for Small Business</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life One day however a
                  small line of blind text by the name of Lorem Ipsum decided to
                  leave for the far World of Grammar.
                </p>

                <ul className="site-list">
                  <li className="site-check">Pointing has no control</li>
                  <li className="site-check">
                    A small river named Duden flows
                  </li>
                  <li className="site-check">
                    Roasted parts of sentences fly into your mouth
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8 order-md-2">
                <p>
                  <img src="images/laptop_1.jpg" alt="" className="img-fluid" />
                </p>
              </div>
              <div className="col-md-4 order-md-1">
                <h3 className="mb-3">All in One Place</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life One day however a
                  small line of blind text by the name of Lorem Ipsum decided to
                  leave for the far World of Grammar.
                </p>

                <ul className="site-list">
                  <li className="site-check">Pointing has no control</li>
                  <li className="site-check">
                    A small river named Duden flows
                  </li>
                  <li className="site-check">
                    Roasted parts of sentences fly into your mouth
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="site-section" id="section-portfolio">
          <div className="container">
            <div className="row">
              <div className="section-heading text-center col-md-12">
                <h2>
                  Featured <strong>Portfolio</strong>
                </h2>
              </div>
            </div>
            <div className="filters">
              <ul>
                <li className="active" data-filter="*">
                  All
                </li>
                <li data-filter=".packaging">Packaging</li>
                <li data-filter=".mockup">Mockup</li>
                <li data-filter=".typography">Typography</li>
                <li data-filter=".photography">Photography</li>
              </ul>
            </div>

            <div className="filters-content">
              <div className="row grid">
                <div className="single-portfolio col-sm-4 all mockup">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg" />
                      <img
                        className="image img-fluid"
                        src="images/p1.jpg"
                        alt=""
                      />
                    </div>
                    <a href="images/p1.jpg" className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex">
                          <img src="images/preview.png" alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-inner">
                    <h4>Square Box Mockup</h4>
                    <div className="cat">Mockup</div>
                  </div>
                </div>
                <div className="single-portfolio col-sm-4 all mockup">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg" />
                      <img
                        className="image img-fluid"
                        src="images/p2.jpg"
                        alt=""
                      />
                    </div>
                    <a href="images/p2.jpg" className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex">
                          <img src="images/preview.png" alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-inner">
                    <h4>Product Box Package Mockup</h4>
                    <div className="cat">Mockup</div>
                  </div>
                </div>
                <div className="single-portfolio col-sm-4 all packaging">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg" />
                      <img
                        className="image img-fluid"
                        src="images/p3.jpg"
                        alt=""
                      />
                    </div>
                    <a href="images/p3.jpg" className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex">
                          <img src="images/preview.png" alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-inner">
                    <h4>Creative Package Design</h4>
                    <div className="cat">Packaging</div>
                  </div>
                </div>
                <div className="single-portfolio col-sm-4 all packaging">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg" />
                      <img
                        className="image img-fluid"
                        src="images/p4.jpg"
                        alt=""
                      />
                    </div>
                    <a href="images/p4.jpg" className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex">
                          <img src="images/preview.png" alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-inner">
                    <h4>Packaging Brand</h4>
                    <div className="cat">Packaging</div>
                  </div>
                </div>
                <div className="single-portfolio col-sm-4 all typography">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg" />
                      <img
                        className="image img-fluid"
                        src="images/p5.jpg"
                        alt=""
                      />
                    </div>
                    <a href="images/p5.jpg" className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex">
                          <img src="images/preview.png" alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-inner">
                    <h4>Isometric 3D Extrusion</h4>
                    <div className="cat">Typography</div>
                  </div>
                </div>
                <div className="single-portfolio col-sm-4 all photography">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg" />
                      <img
                        className="image img-fluid"
                        src="images/p6.jpg"
                        alt=""
                      />
                    </div>
                    <a href="images/p6.jpg" className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex">
                          <img src="images/preview.png" alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-inner">
                    <h4>White Space Photography</h4>
                    <div className="cat">photography</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="site-section bg-light " id="section-resume">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="section-heading text-center">
                  <h2>
                    My <strong>Resume</strong>
                  </h2>
                </div>
              </div>
              <div className="col-md-6">
                <h2 className="mb-5">Education</h2>
                <div className="resume-item mb-4">
                  <span className="date">
                    <span className="icon-calendar" /> March 2013 - Present
                  </span>
                  <h3>Masteral in Information Technology</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                  <span className="school">New York University</span>
                </div>

                <div className="resume-item mb-4">
                  <span className="date">
                    <span className="icon-calendar" /> March 2013 - Present
                    Deacember.
                  </span>
                  <h3>Masteral in Information Technology</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                  <span className="school">New York University</span>
                </div>

                <div className="resume-item mb-4">
                  <span className="date">
                    <span className="icon-calendar" /> March 2013 - Present
                  </span>
                  <h3>Masteral in Information Technology</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                  <span className="school">New York University</span>
                </div>

                <div className="resume-item mb-4">
                  <span className="date">
                    <span className="icon-calendar" /> March 2013 - Present
                    Deacember.
                  </span>
                  <h3>Masteral in Information Technology</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                  <span className="school">New York University</span>
                </div>
              </div>
              <div className="col-md-6">
                <h2 className="mb-5">Experience</h2>

                <div className="resume-item mb-4">
                  <span className="date">
                    <span className="icon-calendar" /> March 2013 - Present
                  </span>
                  <h3>Lead Product Designer</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                  <span className="school">Github</span>
                </div>

                <div className="resume-item mb-4">
                  <span className="date">
                    <span className="icon-calendar" /> March 2013 - Present
                  </span>
                  <h3>Lead Product Designer</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                  <span className="school">Facebook</span>
                </div>

                <div className="resume-item mb-4">
                  <span className="date">
                    <span className="icon-calendar" /> March 2013 - Present
                  </span>
                  <h3>Lead Product Designer</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                  <span className="school">Twitter</span>
                </div>

                <div className="resume-item mb-4">
                  <span className="date">
                    <span className="icon-calendar" /> March 2013 - Present
                  </span>
                  <h3>Lead Product Designer</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                  <span className="school">Shopify</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="site-section" id="section-blog">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="section-heading text-center">
                  <h2>
                    Blog on <strong>Medium</strong>
                  </h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="blog-entry">
                  <a href="#">
                    <img
                      src="images/post_1.jpg"
                      alt="Image placeholder"
                      className="img-fluid"
                    />
                  </a>
                  <div className="blog-entry-text">
                    <h3>
                      <a href="#">Creative Product Designer From Facebook</a>
                    </h3>
                    <p className="mb-4">
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>

                    <div className="meta">
                      <a href="#">
                        <span className="icon-calendar" /> Aug 7, 2018
                      </a>
                      <a href="#">
                        <span className="icon-bubble" /> 5 Comments
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="blog-entry">
                  <a href="#">
                    <img
                      src="images/post_2.jpg"
                      alt="Image placeholder"
                      className="img-fluid"
                    />
                  </a>
                  <div className="blog-entry-text">
                    <h3>
                      <a href="#">Creative Product Designer From Facebook</a>
                    </h3>
                    <p className="mb-4">
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>

                    <div className="meta">
                      <a href="#">
                        <span className="icon-calendar" /> Aug 7, 2018
                      </a>
                      <a href="#">
                        <span className="icon-bubble" /> 5 Comments
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="blog-entry">
                  <a href="#">
                    <img
                      src="images/post_3.jpg"
                      alt="Image placeholder"
                      className="img-fluid"
                    />
                  </a>
                  <div className="blog-entry-text">
                    <h3>
                      <a href="#">Creative Product Designer From Facebook</a>
                    </h3>
                    <p className="mb-4">
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>

                    <div className="meta">
                      <a href="#">
                        <span className="icon-calendar" /> Aug 7, 2018
                      </a>
                      <a href="#">
                        <span className="icon-bubble" /> 5 Comments
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="site-section bg-light" id="section-contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="section-heading text-center">
                  <h2>
                    Wanna <strong>Start Work</strong> With Me?
                  </h2>
                </div>
              </div>

              <div className="col-md-7 mb-5 mb-md-0">
                <form action="" className="site-form">
                  <h3 className="mb-5">Get In Touch</h3>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control px-3 py-4"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control px-3 py-4"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control px-3 py-4"
                      placeholder="Your Phone"
                    />
                  </div>
                  <div className="form-group mb-5">
                    <textarea
                      className="form-control px-3 py-4"
                      cols="30"
                      rows="10"
                      placeholder="Write a Message"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-primary  px-4 py-3"
                      value="Send Message"
                    />
                  </div>
                </form>
              </div>
              <div className="col-md-5 pl-md-5">
                <h3 className="mb-5">My Contact Details</h3>
                <ul className="site-contact-details">
                  <li>
                    <span className="text-uppercase">Email</span>
                    site@gmail.com
                  </li>
                  <li>
                    <span className="text-uppercase">Phone</span>
                    +30 976 1382 9921
                  </li>
                  <li>
                    <span className="text-uppercase">Fax</span>
                    +30 976 1382 9922
                  </li>
                  <li>
                    <span className="text-uppercase">Address</span>
                    San Francisco, CA <br />
                    4th Floor8 Lower <br />
                    San Francisco street, M1 50F
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <footer className="site-footer">
          <div className="container">
            <div className="row mb-3">
              <div className="col-md-12 text-center">
                <p>
                  <a href="#" className="social-item">
                    <span className="icon-facebook2" />
                  </a>
                  <a href="#" className="social-item">
                    <span className="icon-twitter" />
                  </a>
                  <a href="#" className="social-item">
                    <span className="icon-instagram2" />
                  </a>
                  <a href="#" className="social-item">
                    <span className="icon-linkedin2" />
                  </a>
                  <a href="#" className="social-item">
                    <span className="icon-vimeo" />
                  </a>
                </p>
              </div>
            </div>
            <div className="row">
              <p className="col-12 text-center">
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" className="text-primary">Colorlib</a>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              </p>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default NavBar;
