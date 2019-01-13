import React, { Component } from "react";

class SiteHero extends Component {
  render() {
    return (
      <React.Fragment>
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
                  Hello, we're <strong>Problem Solved</strong>
                </h1>
                <p className="lead site-subheading mb-4 site-animate fadeInUp site-animated">
                  We aim to assist with technical solutions within your
                  business. With proven expertise in software and architectural
                  solutions, we can provide the skills you are looking for.
                </p>
                <p>
                  <a
                    href="#section-about"
                    className="smoothscroll btn btn-primary px-4 py-3"
                  >
                    More On Us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default SiteHero;
