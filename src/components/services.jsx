import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="site-section border-top pb-0" id="section-services">
          <div className="container">
            <div className="row mb-4">
              <div className="col-md-12">
                <div className="section-heading text-center">
                  <h2>
                    Our <strong>Services</strong>
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
                    <a href="#/services" className="site-link">
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
                    <a href="#/services" className="site-link">
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
                    <a href="#/services" className="site-link">
                      Learn More <i className="icon-chevron-right" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Services;
