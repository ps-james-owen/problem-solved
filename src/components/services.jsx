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
                  <h3 className="mb-4">Software Craftsmanship</h3>
                  <p>
                    ProblemSolved takes a quality first approach to doftware design and implementation. Using industry standards and practices, we deliver quality software.
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
                  <h3 className="mb-4">Architectural Solutions</h3>
                  <p>
                    ProblemSolved has excellent experience designing both classic and serverless architecture solutions for a range of applications. This includes both Cloud and on-prem applications.
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
                  <h3 className="mb-4">Delivering At Scale</h3>
                  <p>
                    Employees at ProblemSolved have a proven track record of delivering applications at a large scale. Whether it's thousands or requests per second, or extreme computation, we can assist in powering your application.
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
