import React from "react";

const About = () => {
  return (
    <React.Fragment>
      <section
        className="site-section"
        id="section-about"
        // ref={this.props.about}
      >
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
              <img src="images/image_1_long.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-lg-5 pl-lg-5">
              <div className="section-heading">
                <h2>
                  About <strong>Us</strong>
                </h2>
              </div>
              <p className="lead">We help to solve problems!!!!!!!</p>
              <p className="mb-5  ">
                Problem Solved aims to provide skilled assistance to help
                businesses solve a variety of technical problems.
                <br />
                <br /> Our skills include:
              </p>
              <ul>
                <li>Quality first approach to software engineering</li>
                <li>Architecting on the cloud (specifically AWS) </li>
                <li>Delivering large applications at scale</li>
              </ul>
            </div>
          </div>

          {/* <div className="row pt-5">
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
          </div> */}
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
