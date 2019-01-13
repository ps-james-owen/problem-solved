import React, { Component } from "react";

class Blog extends Component {
  render() {
    return (
      <React.Fragment>
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
                    <img src="images/post_1.jpg" alt="" className="img-fluid" />
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
                    <img src="images/post_2.jpg" alt="" className="img-fluid" />
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
                    <img src="images/post_3.jpg" alt="" className="img-fluid" />
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
      </React.Fragment>
    );
  }
}

export default Blog;
